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
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase);
    };
    return Person;
}());
var user;
user = new Person('Deepak');
user.greet('hello i am');
console.log(user);
