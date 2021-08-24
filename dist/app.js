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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const withTemplate = (template, hookId) => (originalConstructor) => {
    return class extends originalConstructor {
        // If we are not using any variable in the class then we can use with _(underscore) symbol. 
        constructor(..._) {
            super();
            console.log('Rendering Template');
            const p = new originalConstructor();
            const hookEl = document.getElementById(hookId);
            if (hookEl) {
                hookEl.innerHTML = template;
                hookEl.querySelector('h1').textContent = `Hi ${this.name} Welcome`;
            }
        }
    };
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
    console.log(target);
    console.log(propertyName);
};
const Log2 = (target, name, descriptor) => {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
const Log3 = (target, name, descriptor) => {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
};
const Log4 = (target, name, position) => {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
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
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const AutoBind = (_, _2, descriptor) => {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
};
class Printer {
    constructor() {
        this.message = 'this works !';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const b = document.querySelector('#button');
// b.addEventListener('click',p.showMessage.bind(p))
b.addEventListener('click', p.showMessage);
const registeredValidators = {};
const Required = (target, propName) => {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['required'] });
};
const PositiveNumber = (target, propName) => {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['positive'] });
};
const validate = (obj) => {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
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
};
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleEl = document.querySelector('#title');
    const priceEl = document.querySelector('#price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        console.log('invalid inputs');
        return;
    }
    console.log('createdCourse : ', createdCourse);
});
