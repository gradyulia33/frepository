'use strict'
const date = document.getElementById('date');
const input = document.getElementById('input');
import mexp from 'math-expression-evaluator';

function dates(date, input){
date = new Date();
//let nowdate = Date.now();
//let result = date - nowdate;
//let day = date.getDate();
//let hours = date.getHours();
//date.toISOString();
//result.toGMTString());
alert(date);
};
input.addEventListener('change', dates(date, input));
