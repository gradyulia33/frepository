'use strict'
//alert('Формулы:'+'\n' + '1. y = kx + b;'+'\n'+'2. y = x ^ 2')
const  a = prompt ('Формулы:'+'\n' + '1. y = kx + b;'+'\n'+'2. y = x ^ 2'+'\n'+'При выборе первой формулы, ввидите 1.' + '\n' +'При выборе второй формулу, ввидите 2 или exit:', '')
function calculate(a) {
    if (a == 1){
      //alert('Ввидите переменные для формулы 1:');
      const x = prompt('Ввидите переменные для формулы 1:'+'\n'+'Переменная x:');
      const k = prompt('Переменная k:');
      const b = prompt('Переменная b:');
      const y = k*x + +b;
      const result = alert('Результат:'+'y ='+y);
      } 
    else if (a == 2){
      const x = prompt('Ввидите переменные для формулы:'+'\n'+'Переменная x:');
      const y = x ^2;
      const result = alert('Результат:'+'y ='+y)}
    else if (a == 'exit'){
      alert("Выход из задания")}
    else (0>a>2) || prompt ('Формулы:'+'\n' + '1. y = kx + b;'+'\n'+'2. y = x ^ 2'+'\n'+'При выборе первой формулы, ввидите 1.' + '\n' +'При выборе второй формулу, ввидите 2 или exit:', '')

}
 console.log(calculate(a))
