"use strict";
// Generic type is a type which is kind of connected with some other types
// and is really flexible regarding which exact type that other type 
const names = ['Deepak'];
console.log(names);
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is Done');
    }, 2000);
});
promise.then(data => {
    data.split('');
});
