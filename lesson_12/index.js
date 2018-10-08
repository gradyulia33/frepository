'use strict'
function add(string = '❤️🇺🇦') {
 let sum = 0;
 for (let i = 0; i < string.length; i += 2) {
   sum += string.charCodeAt(i) + string.charCodeAt(i + 1);//возвращает числовое значение Юникода для символа по указанному индексу 
 }
 return sum / (string.length / 2);
}

function clearNumbers(arr) {
 for (let i = 0; i < arr.length; i += 1) {
     for (let k = 0; k < arr[i].length; k += 1) {
         if (typeof arr[i][k] !== "number") {
             arr[i].splice(k, 1);//изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
             k -= 1;
         }
     }
 }
 return arr;
};

function reverse(...arg) {
 const input = arg.reverse();//на месте обращает порядок следования элементов массива. 
 let output = [];
 for (let i = 0; i < input.length; i += 1) {
   const split = input[i].split('');//разбивает объект String на массив строк путём разделения строки указанной подстрокой.
   const reversed = split.reverse();
   output.push(reversed.join(''));
 }
 return output;
}

function splitArray(arr, count) {
 const result = [];
 for (let i = 0; i < arr.length; i += count) {
   result.push(arr.slice(i, i + count));
 }
 return result;
}



