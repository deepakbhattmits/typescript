"use strict";
function addTwoValues(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return `${a}${b}`;
    }
    return a + b;
}
const resultNum = addTwoValues('a', 5);
console.log('RESULT :', resultNum);
