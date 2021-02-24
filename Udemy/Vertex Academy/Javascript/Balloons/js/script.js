let color = ['red','yellow','blue','green','violet'];
let body = document.body;
let windowWidth = window.innerWidth;
let score = document.querySelectorAll('.score');
let n = 0;
let total = 100;
let currentBalloon = 0;
let gameOver = false;
let lose = document.querySelector('.lose');
let shadow = document.querySelector('.total-shadow');


function createBalloon(){
	let div = document.createElement('div');
	let rand = Math.floor(Math.random() * color.length);
	let randPos = Math.floor(Math.random() * (windowWidth - 100));
	div.className = 'balloon balloon-'+ color[rand];
	div.style.left = randPos + 'px';
	div.dataset.num = currentBalloon;
	currentBalloon++;
	body.appendChild(div);
	balloonAnimation(div);
}

function balloonAnimation(elem){
	let pos = 0;
	let randomPace = Math.floor(Math.random() * 6 - 3);
	let interval = setInterval(frame,Math.floor(12-n/10) + randomPace);
	function frame(){
		if(pos >= (windowWidth + 200) && document.querySelector('[data-num="'+elem.dataset.num+'"]')){
			clearInterval(interval);
			gameOver=true;
		}else{
			pos++;
			elem.style.top = windowWidth - pos +'px';
		}
	}
}

function deleteBalloon(elem){
	playBallSound();
	elem.remove();
	n++;
	updateScore();
}

document.addEventListener('click',function(event){
	if(event.target.classList.contains('balloon')){
		deleteBalloon(event.target);
	}
})

function updateScore(){
	for(let i = 0;i < score.length;i++){
		score[i].textContent = n;
	}
}

function restartGame(){
	let forRemove = document.querySelectorAll('.balloon');
	for(let i = 0;i < forRemove.length;i++){
		forRemove[i].remove();
	}
	gameOver = false;
	n = 0;
	updateScore();
}

function startGame(){
	restartGame();
	let timeout = 0;
	let loop = setInterval(function(){
		timeout = Math.floor(Math.random() * 600 - 100);
		if(!gameOver && n != total)
			createBalloon();
		else if(n != total){
			clearInterval(loop);
			shadow.style.display = 'flex';
			shadow.querySelector('.lose').style.display = 'block';
		}else{
			clearInterval(loop);
			shadow.style.display = 'flex';
			shadow.querySelector('.win').style.display = 'block';
		}	
	},800 + timeout);
}

function playBallSound(){
	let audio = document.createElement('audio');
	audio.src = 'sounds/pop.mp3';
	audio.play();
}

let start = document.querySelector('.start');
start.addEventListener('click',function(){
	startGame();
	document.querySelector('.starting').style.display='none';
	document.querySelector('.bg-music').play();
});

document.querySelector('.restart').addEventListener('click', function(){
	shadow.style.display = 'none';
	shadow.querySelector('.win').style.display = 'none';
	shadow.querySelector('.lose').style.display = 'none'; 
	startGame();
});

document.querySelector('.cancel').addEventListener('click', function(){
	shadow.style.display = 'none';
});


