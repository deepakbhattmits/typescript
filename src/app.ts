
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
const withTemplate = (template: string, hookId: string) => (constructor: any) =>
{
    const p = new constructor();
    const hookEl = document.getElementById(hookId);
    if (hookEl)
    {
        hookEl.innerHTML = template
        hookEl.querySelector('h1')!.textContent = `Hi ${p.name} Welcome`;
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
    console.log(target,propertyName)
}


class Product
{
    @Log
    title: string;
    private _price: number;
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
    getPriceWithTax(tax: number)
    {
        return this._price* (1+ tax)
    }
}