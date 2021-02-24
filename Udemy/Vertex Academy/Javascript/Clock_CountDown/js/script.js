let hourC =  document.querySelector('.clock_hours');
let minuteC = document.querySelector('.clock_minutes');
let secondC = document.querySelector('.clock_seconds');
let hourStep = 0;
let secondStep = 0;
let minuteStep = 0;
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let finalDate = new Date('Jul 25, 2021 00:00:00');

let startClock = () => {
	updateTime();
	setInterval(updateTime,1000);
}
let updateTime = () => {
	let now = new Date();
	let hours = now.getHours() % 12;
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	hourC.style.transform = `rotate(${360 / 12 * hours}deg)`;
	minuteC.style.transform = `rotate(${360 / 60 * minutes}deg)`;
	secondC.style.transform = `rotate(${360 / 60 * seconds}deg)`; 
}

let updateCountdown = () => {
	let now = new Date();
	let diff = finalDate - now;
	console.log(convertMillisToDHMS(diff));
}
let convertMillisToDHMS = (millis)=> {
	let days = Math.floor(millis/day);
	let hours = Math.floor(millis % day/ hour);
	let minutes = Math.floor(millis % hour / minute);
	let seconds = Math.floor(millis % minute / second);
	return {days,hours,minutes,seconds}

}
startClock();
	