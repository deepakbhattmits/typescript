"use strict";
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
const merge = (a, b) => Object.assign(a, b);
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
const merg = (a, b) => Object.assign(a, b);
const storeObj = merg({ name: 'Puji' }, { age: 26 });
console.log('constraints  OBJ :', storeObj);
const countAndPrint = (element) => {
    let descriptionText = 'Got no value.';
    if (element.length > 0) {
        descriptionText = `Got ${element.length} Element${element.length > 1 ? 's' : ''}`;
    }
    return [element, descriptionText];
};
console.log('TEST : ', countAndPrint(['Sprots', 'Cooking']));
const extractAndConvert = (obj, key) => {
    return obj[key];
};
console.log('extractAndConvert : ', extractAndConvert({ name: 'Deep' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter(el => el !== item);
        // this.data.splice(this.data.indexOf(item),1)
    }
    getItems() {
        return [...this.data];
    }
    getItemsLength() {
        return [...this.data].length;
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Deepak');
textStorage.addItem('Puji');
textStorage.addItem('Chotu');
console.log('Here is the users :', textStorage.getItemsLength(), textStorage.getItems());
textStorage.removeItem('Chotu');
console.log('After delete user: Chotu, total users :', textStorage.getItemsLength(), textStorage.getItems());
