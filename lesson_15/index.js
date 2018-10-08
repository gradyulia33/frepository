'use strict';

(function() {
	function generateList(numOfNum, numbersParent) {
		const items = [];

		for (let i = 0; i < numOfNum; i += 1) {
			const item = document.createElement('span');

			item.innerText = i + 1;

			numbersParent.appendChild(item);
			items.push(item);

			if (i < numOfNum - 1) {
				const coma = document.createElement('span');
				coma.innerText = ', ';
				numbersParent.appendChild(coma);
			}
		}

		return items;
	}

	const numOfNum = 20;
	const numbersParent = document.getElementById('numbers');
	const startBtn = document.getElementById('start');
	const pauseBtn = document.getElementById('pause');
	const stopBtn = document.getElementById('stop');
	const count = document.getElementById('count');
	const items = generateList(numOfNum, numbersParent);
	let id;
	let seconds = 0;

	pauseBtn.disabled = true;
	stopBtn.disabled = true;

	startBtn.addEventListener('click', () => {
		startBtn.disabled = true;
		pauseBtn.disabled = false;
		stopBtn.disabled = false;

		id = setInterval(() => {
			const index = seconds % (numOfNum * 2);
			if (index < numOfNum) {
				items[index].style.background = 'green';
			} else if (items[numOfNum * 2 - index - 1]) {
				items[numOfNum * 2 - index - 1].style.background = 'black';
			}

			count.innerText = `${++seconds} seconds`;
		}, 1000);
	});

	pauseBtn.addEventListener('click', () => {
		startBtn.disabled = false;
		pauseBtn.disabled = true;
		clearInterval(id);
	});

	stopBtn.addEventListener('click', () => {
		startBtn.disabled = false;
		pauseBtn.disabled = true;
		stopBtn.disabled = true;
		clearInterval(id);
		seconds = 0;
		count.innerText = '0 seconds';
    //buttons 
  const firstBtn = document.getElementById('X1');
  const secondBtn = document.getElementById('X2');
  const thirdBtn = document.getElementById('X3');
 
          firstBtn.addEventListener('click', () =>{
    firstBtn.disabled = true;
    secondBtn.disabled = false;
    thirdBtn.disabled = false;
 
     id = setInterval(() => {
			const index = seconds % (numOfNum * 2);
			if (index < numOfNum) {
				items[index].style.background = 'green';
			} else if (items[numOfNum * 2 - index - 1]) {
				items[numOfNum * 2 - index - 1].style.background = 'black';
			}
     count.innerText = `${++seconds} seconds`;
     }, 500);
     }); 
           secondBtn.addEventListener('click', () => {
    secondBtn.disabled = true;
    firstBtn.disabled = false;
    thirdBtn.disabled = false;

    id = setInterval(() => {
			const index = seconds % (numOfNum * 2);
			if (index < numOfNum) {
				items[index].style.background = 'green';
			} else if (items[numOfNum * 2 - index - 1]) {
				items[numOfNum * 2 - index - 1].style.background = 'black';
			}
     count.innerText = `${++seconds} seconds`;
     }, 200);
     });
           thirdBtn.addEventListener('click', () =>{
   thirdBtn.disabled = true;
   firstBtn.disabled = false;
   secondBtn.disabled = false;

   id = setInterval(() => {
			const index = seconds % (numOfNum * 2);
			if (index < numOfNum) {
				items[index].style.background = 'green';
			} else if (items[numOfNum * 2 - index - 1]) {
				items[numOfNum * 2 - index - 1].style.background = 'black';
			}
    count.innerText = `${++seconds} seconds`;
  }, 100);
});
});
}())