
interface IfetchData
{
    id: number;
    name: string;
    job?: {
        title: string;
        description: string;
    }
}
const fetchData: IfetchData = {
    id: 1234,
    name: 'Deepak',
    // job: {
    //     title: 'Developer',
    //     description:'Works with React js, Typescript'
    // }
}

// console.log('JS way, here is the object :', fetchData.job && fetchData.job.title);

// console.log('without optional chain , here is the object : ', fetchData.job.title);

console.log('with optional chain , here is the object : ', fetchData?.job?.title);


// ******* Nullish Coalescing
// it works only if when there is null or undefined

const input = null;

const storedData = input ?? 'Default';


console.log('NULLISH :',storedData)