// this is literal type we have two values that is a union type
//
//conversionType: 'as-number' | 'as-text'




type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';


const combine = (number1: Combinable, number2: Combinable, conversionType:ConversionDescriptor) =>
{
    let result;
    if (typeof number1 === 'number' && typeof number2 === 'number'|| conversionType==='as-number')
    {
        
         result = +number1 + +number2;
    } else
    {
        result = `${ number1 } ${ number2 }`;
    }
    return result;
}
const combineAges = combine(5, 5, 'as-number');

console.log('add to numbers :', combineAges)

const combineStringAges = combine('5', '5', 'as-number');

console.log('add to numbers :', combineStringAges)


const combineName = combine('Deepak', 'Bhatt','as-text');


console.log('concatinated strings:', combineName)