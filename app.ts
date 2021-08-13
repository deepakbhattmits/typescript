let userInput: unknown;
let userName: string;

userInput = 20;
userInput = 'Deepak';

if (typeof userInput === 'string')
{
    
    userName = userInput;
}


const generateError = (message: string, code: 500) => { throw { message, statusCode: code } }

generateError('something went wrong', 500)
