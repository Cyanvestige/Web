$(document).ready(function(){
	let addTask = $('.add-button');
	let inputContent = $('.input');
	let deleteTask = $('.trash');
	addTask.on('click',function(){
		let elem = `<li class="task">
					<div class="check">
						<input type="checkbox">
					</div>
					<div class="content">${inputContent.val()}</div>
					<div class="trash col3"></div>
				</li>`;
		$('.tasks').append(elem);
		inputContent.val('');
	})
	$('.tasks').on('click','.trash',function(){
		$(this).parent().remove();
	})

	$('.tasks').on('change','.check input',function(){
		$(this).parent().next().toggleClass('checked');
	})
	
	$( "#sortable" ).sortable();
})

