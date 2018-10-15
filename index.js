'use strict'
const date = document.getElementById('date');
const input = document.getElementById('input');
const res = document.getElementById('res');

function dates(res, input){
input = new Date("21-10-2018");
let newdate = input.toGMTString();
let nowdate = Date.now();
let result = newdate - nowdate;
result /= 1000;
result /=60;
result /=60;
result /=24;
//let hours = date.getHours();
//date.toISOString();
//result.toGMTString());
alert(result);
};

    
