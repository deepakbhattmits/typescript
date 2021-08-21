type Comb = number | string;

function addTwoValues (a: number, b: number):number;
function addTwoValues(a: string, b: string): string;
function addTwoValues (a: number, b: string):string;
function addTwoValues (a: string, b: number):string;
function addTwoValues (a: Comb, b: Comb)
{
    if (typeof a === 'string' || typeof b === 'string')
    {
        return `${ a }${ b }`;
    }
    return a+ b
}
const resultNum = addTwoValues('a', 5);
console.log('RESULT :', resultNum)