'use strict'
//const  a = prompt ('Формулы:'+'\n' + '1. y = kx + b;'+'\n'+'2. y = x ^ 2'+'\n'+'При выборе первой формулы, ввидите 1.' + '\n' +'При выборе второй формулу, ввидите 2 или exit:', '')
function calculate() {
    //const answer = prompt ('Exit?');
    //console.log(answer);
    //if (answer !== 'exit'){
     // calculate();
   // }
   const result = {history :[]};//
   while(true){//Пока условие верно – выполняется код из тела цикла.
        let formula;
        let ready = false;
        while (!ready){
             const answer = prompt('Choose formula, enter 1 or 2');
             result.history.push(answer);
             switch (answer){//Конструкция switch заменяет собой сразу несколько if.
                 case '1'://switch начинает выполняться от соответствующей директивы case
                 case'2':
                 formula = answer;
                 result.formula = answer = '1' ? 'y=kx+b' : 'y=x^2';
                 ready = true;
                 break;
                 case 'exit':
                 return;
   }
  }
  if (formula === '1'){
    const  k = getArgValue('k');//
    if (k === 'exit'){
      return result;
    }
    const  x = getArgValue('x');
    if (x === 'exit'){
      return result;
    }
    const  b = getArgValue('b');
    if (x === 'exit'){
      return result;
    }
    result.args = {
      k, x, b,
    };
    alert(k*x + b);
  }else{
    if(formula === '2')
      const  x = getArgValue('x', result.history);
    if (x === 'exit'){
      return result;
    }
    result.args= {x};
    alert(x**2)
     }
  } 
 };
