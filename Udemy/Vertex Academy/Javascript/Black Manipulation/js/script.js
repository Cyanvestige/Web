window.onload = function(){
	let cube= document.getElementById('cube');
	
	//Pos Y manipulation
	let posY = document.getElementById('pos-y');
	posY.onchange = function(){
		cube.style.top = posY.value+'px';
	}

	//Pos X manipulation
	let posX = document.getElementById('pos-x');
	posX.onchange = function(){
		cube.style.left = posX.value+'px';
	}

	//size manipulation
	let size = document.getElementById('size');
	size.onchange = function(){
		cube.style.transform = 'scale('+size.value+')';
	}

	//opacity manipulation
	let opa = document.getElementById('opacity');
	opa.onchange = function(){
		cube.style.opacity = opa.value;
	}

	//shape change
	let shape = document.getElementById('shape');
	let change = document.querySelector('.click');
	change.addEventListener('click',function(){
		if(shape.value === '1'){
			cube.style.borderRadius = '0';
			cube.style.transform = 'rotate(0deg)'; 
		}
		else if(shape.value === '2'){
			cube.style.borderRadius = '50%';
		}
		else if(shape.value === '3'){
			cube.style.borderRadius = '0';	
			cube.style.transform = 'rotate(45deg)'; 
		}
	})

	//HEX manipulation
	let hex = document.getElementById('hex');
	hex.onkeypress = function(){
		cube.style.backgroundColor = '#'+hex.value;
	}

	//RGBA manipulation
	let rgbar = document.getElementById('rgba-r');
	let rgbag = document.getElementById('rgba-g');
	let rgbab = document.getElementById('rgba-b');
	let rgbaa = document.getElementById('rgba-a');

	let rgbaCont = document.querySelector('.rgb');
	let rgbaInputs = rgbaCont.querySelectorAll('input');

	for(let i = 0;i < rgbaInputs.length;i++){
		rgbaInputs[i].onchange = function(){
			cube.style.backgroundColor = 'rgba('+rgbar.value+','+
			rgbag.value+','+rgbab.value+','+rgbaa.value+')';
		}
	}
	
}