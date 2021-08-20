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
var addFn;
addFn = function (n1, n2) { return n1 + n2; };
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase, this.name);
        }
        else {
            console.log(phrase);
        }
    };
    return Person;
}());
var user;
user = new Person('Deepak');
// user.name='Puji '
user.greet('hello i am');
console.log(user);
