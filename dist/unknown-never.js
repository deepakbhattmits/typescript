"use strict";
let userInput;
let userName;
userInput = 20;
userInput = 'Deepak';
if (typeof userInput === 'string') {
    userName = userInput;
}
const generateError = (message, code) => { throw { message, statusCode: code }; };
generateError('something went wrong', 500);
