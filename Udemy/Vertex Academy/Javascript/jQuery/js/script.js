$(document).ready(function(){
	let h1 = $('h1');
	console.log(h1)
})
//Mouse Event
//click
let button1 = $('.clickBtn');
button1.click(function(){
	alert("You have clicked");
})

//dblclick

let divstyle = $('#block');
let button2 = $('.changeColor');
let style = {
	width:'400px',
	height:'600px',
	backgroundColor:'green'
}

button2.click(function(){
	divstyle.css(style);
})

//mouse over
let button3 = $('.mouseOver');
button3.mouseover(function(){
	alert("Cursor is on the button");
})

//Keyboard Event
let int = $('.input');
int.on('keypress',function(e){
	if(e.which === 13 && e.shiftKey){
		console.log(this.value);
	}
})


//Form Event
let textInp = $('input[type=text]');
let fileInp = $('input[type=file]');
let form = $('form')
textInp.on('focus',function(){
	$(this).addClass('focused');
})

textInp.on('blur',function(){
	$(this).removeClass('focused');
})

fileInp.on('change',function(){
	console.log("A file has been chosen");
})


form.on('submit',function(){
	alert();
})

//Document/Window Events
$(window).on('resize',function(){
	console.log(`Width: ${$(window).width()}; Height:${$(window).height()}`)
})

$(window).on('scroll',function(){
	console.log(`Offset top:${$(window).scrollTop()}`)
})

//Hide block
let button4 = $('.hideBlock');
button4.click(function(){
	$('#block').fadeToggle();
})

//Animation change
let button5 = $('.widthChange');
button5.click(function(){
	$('#block').animate({
		width:'800px'},2000);
	})

//Shape(Attribute) Change
let button6 = $('.shapeChange');
button6.click(function(){
	$('#block').attr('class','circle');
}) 

let val = $('.valtest').val();
let button7 = $('.val');
button7.click(function(){
	val = $('.valtest').val();
	alert(val);
})

//change the color of text(addClass)
let button8 = $('.changeTextColor');
button8.on('click',function(){
	$('#block').toggleClass('font-red');
}) 

//addContent
let button9 = $('.addList');

button9.on('click',function(){
	$('<li></li>').addClass('font-red').text('2').prependTo($('ul'));
})
