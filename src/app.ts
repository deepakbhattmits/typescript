
// make sure inside your tsconfig file 
// just add target to es6 AND 
// add the experimentalDecorator:true

// const Logger =(constructor: Function)=>
// {
//     console.log('Logging...');
//     console.log(constructor)
// }
    const Logger = (logString:string    ) =>(constructor: Function)=>
{
    console.log(logString);
    console.log(constructor)
    }
// const withTemplate = (template: string, hookId: string) => (constructor: any) =>
// {
//     const p = new constructor();
//     const hookEl = document.getElementById(hookId);
//     if (hookEl)
//     {
//         hookEl.innerHTML = template
//         hookEl.querySelector('h1')!.textContent = `Hi ${p.name} Welcome`;
//     }
// }

// after instantiating class this will return a class 
const withTemplate = (template: string, hookId: string) => <T extends {new (...args:any[]):{name:string}}>(originalConstructor:T) =>
{
    return class extends originalConstructor
    {

        // If we are not using any variable in the class then we can use with _(underscore) symbol. 
        constructor(..._: any[])
        {
            super();
            console.log('Rendering Template')
                const p = new originalConstructor();
    const hookEl = document.getElementById(hookId);
    if (hookEl)
    {
        hookEl.innerHTML = template
        hookEl.querySelector('h1')!.textContent = `Hi ${this.name} Welcome`;
    }

    }
}
}

// @Logger
// @Logger ('Logging - Person')

@withTemplate('<h1>Hi There!</h1>','app')
class PersonClass
{
    name= 'Deepak';
    constructor()
    {
        console.log('Creating person object');
    }
}
const per = new  PersonClass ();

console.log('test : ', per);

//.

const Log = (target: any, propertyName: string | Symbol) =>
{
    console.log('property-decorator');
    console.log(target);
    console.log(propertyName)
}
const Log2 = (target: any,name: string, descriptor: PropertyDescriptor) =>
{
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
const Log3 = (target: any,name: string|Symbol, descriptor: PropertyDescriptor) =>
{
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
const Log4 = (target: any,name: string|Symbol, position: number) =>
{
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product
{
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number){
    if (this.price > 0)
    {
        this.price = val;
    } else
    {
        throw new Error('Invalid price - should be postive')
    }
    }
    constructor(title: string,p:number)
    {
        this.title = title;
        this._price= p;
    }
    @Log3
    getPriceWithTax(@Log4 tax: number)
    {
        return this._price* (1+ tax)
    }
}
const AutoBind = (_: any, _2: string | Symbol, descriptor: PropertyDescriptor) =>
{
    const originalMethod = descriptor.value;
    const adjDescriptor:PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get()
        {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDescriptor;
}
class Printer
{
    message = 'this works !';
    @AutoBind
    showMessage()
    {
        console.log(this.message)
    }
}
const p = new Printer();
const b = document.querySelector('#button')!;

// b.addEventListener('click',p.showMessage.bind(p))
b.addEventListener('click', p.showMessage)


interface ValidatorConfig
{
    [property: string]: {
    [validatableProp:string]:string[]// ['required','positive']
}    
}

const registeredValidators: ValidatorConfig = {};
const Required = (target: any, propName: string) =>
{
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]:['required']
    }
};
const PositiveNumber = (target: any, propName: string) =>
{
    registeredValidators[target.constructor.name] = {
         ... registeredValidators[target.constructor.name],
        [propName]:['positive']
    }
}
const validate = (obj: any) =>
{
    const objValidatorConfig = registeredValidators[obj.constructor.name];

    if (!objValidatorConfig)
    {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig)
    {
        for (const validator of objValidatorConfig[prop])
        {
            switch (validator)
            {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course
{
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number)
    {
        this.title = t;
        this.price = p;

    }
}
const courseForm = document.querySelector('form')!;

courseForm.addEventListener('submit', (e) =>
{
    e.preventDefault();
    const titleEl = document.querySelector('#title')! as HTMLInputElement;

    const priceEl = document.querySelector('#price')! as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);
   if(!validate(createdCourse)){
       console.log('invalid inputs')
       return;
    }
    console.log('createdCourse : ', createdCourse)

    
})