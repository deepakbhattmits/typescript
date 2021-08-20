"use strict";
// const i1 = <HTMLInputElement>document.querySelector('#num1')!;
// const i2 = <HTMLInputElement>document.querySelector('#num2')!;
// const bu = <HTMLButtonElement>document.querySelector('#button')! ;
// const i1 = document.querySelector('#str')! as HTMLInputElement;
var i1 = document.querySelector('#str');
var i2 = document.querySelector('#num1');
var i3 = document.querySelector('#num2');
var bu = document.querySelector('#button');
//if we don't wan't to use escalamation mark here 
if (i1) {
    i1.value = 'Deepak';
}
// i1.value = 'Deepak';
i2.value = '10';
i3.value = '15';
