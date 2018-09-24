/*'use strict'
const arr1  = [20, 10, 11, 0, -2];
let a = Math.max(20, 10, 11, 0, -2);
let b = Math.min(20, 10, 11,  0, -2);
const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;   
const c = average( [ 20, 10, 11, 0, -2] ); 
let obj.max = a;
let obj.min = b;
let obj.avg = c;

console.log(obj);*/
const myAge = 20;
let ending = 'лет';
const two = %100;
const twe = %10;
if (myAge two>10 &&  myAge two<15){
    ending = 'лет'}
     else if
    (myAge twe === 1){
	ending = 'год'} 
	else if(myAge twe>1 &&  myAge twe<5){
    ending = 'года'}

 console.log('Мой возраст' + myAge + ' ' + ending);

const arr1  = [1, 2, 4, -4];
const result = {};
let sum = 0;
let negative = 0;
let notNumber = 0;
let min = Infinity;
let max = -Infinity;
 for(let i=0; i<arr1.length; i+=1){
 	//1//for (const i in arr1){
 	//2//for (const el = arr1[1]);
 	if (typeof arr1[1] === 'number'){	
 	sum += arr1[i];
 	if(arr1[i] < min){
 		min = arr1[i];}
 		if( arr1[i]>max){
 			max = arr1[i];}
 		if(arr1[i] <0){
 		negative +=1;}
 		}else {notNumber+=1;}
 	}
 }
 const result =  {
 	avg: sum/(arr1.length - notNumber),
    min,
    max, 
    negative,
    'not a number'
}



