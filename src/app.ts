

// Generic type is a type which is kind of connected with some other types
// and is really flexible regarding which exact type that other type 

// const names: Array<string | number> = ['Deepak'];
// console.log(names)



// const promise: Promise<string> = new Promise((resolve, reject) =>
// {
//     setTimeout(() =>
//     {
        
//         resolve('This is Done')
//     }
//         , 2000)
// });

// promise.then(data =>
// {
//     data.split('')
// })


// const merge = (a: object, b: object) => Object.assign(a, b);


const merge= <T ,U>(a: T, b: U) => Object.assign(a, b);

const storedObj = merge({ name: 'Deepak' }, { age: 30 });
console.log('STOREDOBJ :', storedObj);

// if we do that then TS can't know theis storedObj have this name key in that
// let's refactor with generics type
// storedObj.name;
console.log('STOREDOBJ.name :', storedObj.name);


//constraints


// In above we have added <T,U> generic types but we don't care about the it's type now we have
// add this with the help of constraints
// extends object - this will tell TS now T and U has to be a object
const merg = <T extends object, U extends object>(a: T, b: U) => Object.assign(a, b);

const storeObj = merg({ name: 'Puji' }, { age: 26 } );
console.log('constraints  OBJ :', storeObj);


interface ILengthy
{
    length:number
}

const countAndPrint = <T extends ILengthy>(element:T):[T,string] =>
{
    let descriptionText = 'Got no value.';
    if (element.length > 0)
    {
        descriptionText=`Got ${element.length} Element${element.length>1 ?'s':''}`
    }
    return [element, descriptionText]
    
}

console.log('TEST : ', countAndPrint(['Sprots', 'Cooking']));


const extractAndConvert = <T extends object,U extends keyof T>(obj:T, key:U) =>
{
    return obj[key];
}
console.log('extractAndConvert : ', extractAndConvert({name:'Deep'},'name'))




class DataStorage<T extends string|number|boolean>
{
    private data:T[] = [];
    addItem(item:T)
    {
        this.data.push(item)
    }
    removeItem(item:T)
    {
        this.data = this.data.filter(el => el !== item);
        // this.data.splice(this.data.indexOf(item),1)
    }
    getItems()
    {
        return [...this.data];
    }
     getItemsLength()
    {
        return [...this.data].length;
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Deepak');
textStorage.addItem('Puji');
textStorage.addItem('Chotu');
console.log('Here is the users :',textStorage.getItemsLength(), textStorage.getItems());
textStorage.removeItem('Chotu');
console.log('After delete user: Chotu, total users :',textStorage.getItemsLength(),textStorage.getItems());
