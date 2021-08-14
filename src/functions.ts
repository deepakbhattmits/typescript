const sum = (n1: number, n2: number) => n1 + n2;

const printResult = (num: number) => console.log('TEST : ', num) ;

const sumOfTwo = sum(2, 3);

(() => { printResult(sumOfTwo) })()



// here we got this will hold function only 
// but there is a issue this will hold any kind of function
// so we should be more specific 

// let sumFunction: Function;

let sumFunction:(n1:number, n2:number)=> number;

sumFunction = sum;
// sumFunction = printResult

console.log('test :', sumFunction(5, 9))



const addAndHandle = (n1: number, n2: number, cb: (res: number) => void) =>
{
    const result = n1 + n2;
    cb(result)
}

addAndHandle(10,20,(result)=>console.log('RESULT : ',result))