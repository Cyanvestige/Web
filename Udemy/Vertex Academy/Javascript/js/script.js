/*function toCamalCase(string){
	let arr = string.split(" ");
	for(i = 1;i < arr.length;i++){
		arr[i][0] = arr[i][0].toUpperCase() + arr[i].substring(1,arr.length);
	}
	arr[0] = arr[0][0].toLowerCase() + arr[0].substring(1,arr.length);
	let newa = arr.join("");
	return newa;
}

let a = "To be or not to be";
a = toCamalCase(a);
console.log(a);
*/
let task = document.createElement('li');
let task2 = document.createElement('li');
task.textContent = 'third';
task2.textContent = 'Beginning';
let list = document.getElementById('list');
let first = list.children[0];
list.appendChild(task);
list.insertBefore(task2,first);
list.children[3].remove();

//color
let changecolor = document.querySelector('.green');
changecolor.style.color = 'green';

//Event
let click = document.querySelector(".click");
click.onclick = function(){
	console.log("You have single-clicked");
}
click.onmouseover = function(){
	console.log("Your pointer is over the button");
}

click.addEventListener('click',function(){
	console.log("Hello!")
})

click.addEventListener('click',function(){
	console.log("Bye!")
})

//KeyInput
let inp = document.querySelectorAll('input');

for(let i = 0;i < inp.length;i++){
	inp[i].addEventListener('keypress',function(event){// press "enter" then output/ "keyup" "keydown" 
		if(event.which == 13){
			console.log(this.value);
		}
	})
}

//Change hypertext destination
let a = document.querySelector('a');
a.addEventListener('click',function(event){
	event.preventDefault();
	alert("local anchor");
})

//Random
let ran = Math.floor(Math.random() * (15 - 5 + 1) + 5);
console.log(ran);

//Function Declaration
/*function greeting(){
	console.log('Hi!');
}*/

//Function Expression
let greeting = function(){
	console.log('Hi!');
}

//Arrow Function
/*let greeting = () => {
	console.log('Hi!');
}*/
//let greeting = () => console.log('Hi!');

let sum = function(a,b,c){
	return a+b+c;
}// ==  let sum (a,b,c) => a + b + c;

let square = (x) => x * x;  


