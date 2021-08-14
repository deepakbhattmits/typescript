"use strict";
// this is literal type we have two values that is a union type
//
//conversionType: 'as-number' | 'as-text'
var combine = function (number1, number2, conversionType) {
    var result;
    if (typeof number1 === 'number' && typeof number2 === 'number' || conversionType === 'as-number') {
        result = +number1 + +number2;
    }
    else {
        result = number1 + " " + number2;
    }
    return result;
};
var combineAges = combine(5, 5, 'as-number');
console.log('add to numbers :', combineAges);
var combineStringAges = combine('5', '5', 'as-number');
console.log('add to numbers :', combineStringAges);
var combineName = combine('Deepak', 'Bhatt', 'as-text');
console.log('concatinated strings:', combineName);
