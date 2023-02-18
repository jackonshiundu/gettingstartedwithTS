"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    //constructors
    constructor(id, name, adress) {
        this.id = id;
        this.name = name;
        this.adress = adress;
    }
    //methods
    getNameWithAdress() {
        return `${this.name} ${this.adress}`;
    }
    //member visibilty
    //we use  private id or #id!:number
    //protected name-will  protect it so that its available only in etended class and class methods
    //static
    // basically a method that return a statis value
    //setters are umethods that sets the valu of a variable
    get getId() {
        return this.id;
    }
    //setters are umethods that get the valu of a variable
    set setId(id) {
        this.id = id;
    }
    //importing an Interface
    Login() {
        return { name: 'jackon', id: 23, age: 45, email: 'jackon20@gmail.com' };
    }
}
//instances
let john = new Employee(45, 'jackon', 'nairobi');
let nameAdress = john.getNameWithAdress();
console.log(nameAdress);
class Manager extends Employee {
    constructor(id, name, adress) {
        super(id, name, adress);
    }
    getManager() {
        return `${this.name} is the manager from ${this.adress}`;
    }
}
const james = new Manager(67, 'james', 'kenya, kakamega');
console.log(james.getManager());
console.log(james.getId);
james.setId = 66;
console.log(james.getId);
console.log(john.Login());
