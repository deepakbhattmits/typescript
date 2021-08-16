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

interface Greetable
{
    name: string;
    greet(phrase:string):void
}
class Person implements Greetable
{    
    name: string;
    age = 30;
    constructor(n: string)
    {
        this.name = n;
    }
    greet(phrase:string)
    {
        console.log(phrase)
    }
}
let user: Greetable;
user = new Person('Deepak')
user.greet('hello i am')
console.log(user)