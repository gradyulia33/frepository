'use strict'
const arg = {className:'class', attributes:{'data - name': 'Anatoliy'}, content:'Some Text'};
const n;
function init(arg, n) {
	const ul = document.createElement('ul').body;
  for (let i = 0; i < arg.length; i+=1) {
    //для каждого елемента в массиве создать
	  const e = arg[i];  
  const li = document.createElement('li').ul;
	  const keys = Object.keys(e.attributes);	  
  }
	li.appendChild(document.createTextNode(e.content));
	    ul.appendChild(li);
	document.body.appendChild(ul);
}
console.log(init(arg, n));
function listen() {
  const button = document.addEventListener('button', () => console.log('clicked');
   if (button = delete(ul)){
    return true};
   if (button != delete(ul)){
   return false};
}
console.log()
