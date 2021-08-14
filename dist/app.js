"use strict";
var userInput;
var userName;
userInput = 20;
userInput = 'Deepak';
if (typeof userInput === 'string') {
    userName = userInput;
}
var generateError = function (message, code) { throw { message: message, statusCode: code }; };
generateError('something went wrong', 500);
