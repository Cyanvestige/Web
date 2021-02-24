let color = ['red','green','blue','yellow','violet'];
let body = document.body;
let windowWidth = window.innerWidth;
let currentBal = 0;
let n = 0;
let gameOver = false;
currentBal++;

document.addEventListener('click',function(event){
	if(event.target.classList.contains('balloons')){
		deleteBalloon(event.target);
		getScore();
	}
});

function createBalloon(){
	let div = document.createElement("div");
	let rand = Math.floor(Math.random() * color.length);
	let randPos = Math.floor(Math.random() * windowWidth);
	div.className = 'balloons balloon-' + color[rand];
	div.dataset.num = currentBal;
	currentBal++;
	div.style.left = randPos + 'px';
	body.appendChild(div);
	animatedBalloon(div);
}

function animatedBalloon(elem){
	let bottom = 0;
	let interval = setInterval(frame,1)
	function frame(){
		if(bottom >= windowWidth+200 ){ //&& document.querySelector('[dataset-num"'+elem.dataset.num+'"]')
			clearInterval(interval);
			deleteBalloon(elem);
		}
		else{
			bottom++;
			elem.style.top = windowWidth - bottom + 'px';
		}
	}
}

function deleteBalloon(elem){
	elem.remove();
	n++;
}

function getScore(){
	let score = document.querySelectorAll('.score');
	for(let i = 0;i < score.length;i++){
		score[i].textContent = n;
	}
}

function startGame(){
	let loop = setInterval(function(){
		if(!gameOver && n != 10){
			createBalloon();
		}
	},1000)
}
startGame();