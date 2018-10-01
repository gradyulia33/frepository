'use strict'
const object = {
	  a:'1',
    b:'2', 
    c:'3', 
    d:'4',
    e:'5'};
const word = [ 'b', 'c', 'd'];
function removeKeys1(object, word){
  for (let i in object){
    let k = word.includes(i);
    if(k){
      delete object[i];
    }
  }
   	return object;
   };

function removeKeys2(object1, word){
  const object1 = {};
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i+=1) {
   const key = keys[i];
   let exist = false;

   for (let j = 0; j < word.length; j+=1) {
     if (key ===word[j])}{
      exist = true;
      break;
     }
   }
  if (!exist){
    object1{key} = object{key};
  }
	return  object1;
   }

let a = 3;
let b = 7;
function absDiff(a) {
	function abs2(b){
		return  Math.abs(b - a);
	}
  return abs2
}
