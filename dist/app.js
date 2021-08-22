"use strict";
// make sure inside your tsconfig file 
// just add target to es6 AND 
// add the experimentalDecorator:true
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// const Logger =(constructor: Function)=>
// {
//     console.log('Logging...');
//     console.log(constructor)
// }
const Logger = (logString) => (constructor) => {
    console.log(logString);
    console.log(constructor);
};
const withTemplate = (template, hookId) => (constructor) => {
    const p = new constructor();
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1').textContent = `Hi ${p.name} Welcome`;
    }
};
// @Logger
// @Logger ('Logging - Person')
let PersonClass = class PersonClass {
    constructor() {
        this.name = 'Deepak';
        console.log('Creating person object');
    }
};
PersonClass = __decorate([
    withTemplate('<h1>Hi There!</h1>', 'app')
], PersonClass);
const per = new PersonClass();
console.log('test : ', per);
//.
const Log = (target, propertyName) => {
    console.log('property-decorator');
    console.log(target, propertyName);
};
class Product {
    constructor(title, p) {
        this.title = title;
        this._price = p;
    }
    set price(val) {
        if (this.price > 0) {
            this.price = val;
        }
        else {
            throw new Error('Invalid price - should be postive');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
