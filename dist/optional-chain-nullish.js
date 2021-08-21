"use strict";
var _a;
const fetchData = {
    id: 1234,
    name: 'Deepak',
    // job: {
    //     title: 'Developer',
    //     description:'Works with React js, Typescript'
    // }
};
// console.log('JS way, here is the object :', fetchData.job && fetchData.job.title);
// console.log('without optional chain , here is the object : ', fetchData.job.title);
console.log('with optional chain , here is the object : ', (_a = fetchData === null || fetchData === void 0 ? void 0 : fetchData.job) === null || _a === void 0 ? void 0 : _a.title);
// ******* Nullish Coalescing
// it works only if when there is null or undefined
const input = null;
const storedData = input !== null && input !== void 0 ? input : 'Default';
console.log('NULLISH :', storedData);
