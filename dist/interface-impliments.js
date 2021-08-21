"use strict";
// interface Person
// {
//     name: string;
//     age: number;
//     greet(phrase:string):void
// }
// let user: Person;
// user = {
//     name: 'Deepak',
//     age: 30,
//     greet(phrase: string)
//     {
//         console.log(`${phrase} ${this.name}`);
//     }
// }
// user.greet('Hi there i am ')
let addFn;
addFn = (n1, n2) => n1 + n2;
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase, this.name);
        }
        else {
            console.log(phrase);
        }
    }
}
let user;
user = new Person('Deepak');
// user.name='Puji '
user.greet('hello i am');
console.log(user);
