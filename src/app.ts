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


// type AddFn = (n1: number, n2: number) => number;


interface AddFn
{
    (n1:number, n2:number):number
}

let addFn: AddFn;

addFn = (n1: number, n2: number) => n1 + n2

// console.log(addFn(3,2))

interface Named
{
    readonly name?: string; // we can add readonly property into that
    outPutname?: string;
}
interface Greetable extends Named
{
    greet(phrase:string):void
}
class Person implements Greetable
{    
    name?: string;
    age = 30;
    constructor(n?: string)
    {
        if (n)
        {
            
            this.name = n;
        }
    }
    greet(phrase:string)
    {
        if (this.name)
        {
            console.log(phrase, this.name);
        } else
        {
         
            console.log(phrase);   
        }
    }
}
let user: Greetable;
user = new Person('Deepak')
// user.name='Puji '
user.greet('hello i am')
console.log(user)