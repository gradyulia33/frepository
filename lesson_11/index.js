'use strict'

const arr = [
[1, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 'e'],
];

let x = 0;
let y = 0;
for (let i=0/*переменная в массиве*/ x !== 4 || y !==4;
/*(условие на котором мы можем остановиться
.дойдем до цели(в массиве все начинаеться с 0,
 выходит 1 должна стать на у=4 х=4))*/ )
{arr[y] [x] = 0;
if (x <4){
	x=x+1;
}else{
	y=y+1;
}
arr[y][x] = 1;}
console.log(arr[y][x]); //console.log(arr[0, 0, 0, 1][3]);//[номер масива][номер елемента в массиве] 

 const arr1 = [
[1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, -2, 0],
[0, 0, 0, -1, 0, 0],
[0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0],
];

const res = {
	value: Infinity;
	x:0;
	y:0;
}
 for (const y in arr1){
 	for (const x in arr1[y]){
 		console.log(arr1[y][x] < res.value){
 			res.value = arr[y][x];
 			res.y = y;
 			res.x = x;
 		}
 	}
 }

console.log(res);

