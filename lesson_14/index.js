'use strict'
function init(array, n) {
	let newUl = document.createElement('ul');
	document.body.appendChild(newUl);
	let maxLength = (array.length > n ? n : array.length);
	for (let i = 0; i < maxLength; i += 1) {
		let newLi = document.createElement('li');
		let classKey = array[i].className;
		newLi.className += classKey;
		let attrKey = Object.keys(array[i].attributes);
		for (let j of attrKey) {
			newLi.setAttribute(j, array[i].attributes[j]);
		}
		newLi.innerText = array[i].content;
		newUl.appendChild(newLi);
	}
}

// init(arr, 4);


function listen() {
	let remUl = document.getElementsByTagName('ul')[0];
	let button = document.getElementById('button');
	button.addEventListener('click', () => 
	remUl.parentElement.removeChild(remUl))
}
console.log(listen());
