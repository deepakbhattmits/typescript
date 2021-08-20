

// const i1 = <HTMLInputElement>document.querySelector('#num1')!;
// const i2 = <HTMLInputElement>document.querySelector('#num2')!;
// const bu = <HTMLButtonElement>document.querySelector('#button')! ;

// const i1 = document.querySelector('#str')! as HTMLInputElement;

const i1 = document.querySelector('#str');
const i2 = document.querySelector('#num1')! as HTMLInputElement;
const i3 = document.querySelector('#num2')! as HTMLInputElement;
const bu = document.querySelector('#button')! as HTMLButtonElement;



//if we don't wan't to use escalamation mark here 
if (i1)
{
   (i1 as HTMLInputElement).value = 'Deepak'; 
}


// i1.value = 'Deepak';
i2.value = '10';
i3.value = '15';
