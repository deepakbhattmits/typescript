"use strict";
var sum = function (n1, n2) { return n1 + n2; };
var printResult = function (num) { return console.log('TEST : ', num); };
var sumOfTwo = sum(2, 3);
(function () { printResult(sumOfTwo); })();
// here we got this will hold function only 
// but there is a issue this will hold any kind of function
// so we should be more specific 
// let sumFunction: Function;
var sumFunction;
sumFunction = sum;
// sumFunction = printResult
console.log('test :', sumFunction(5, 9));
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
addAndHandle(10, 20, function (result) { return console.log('RESULT : ', result); });
