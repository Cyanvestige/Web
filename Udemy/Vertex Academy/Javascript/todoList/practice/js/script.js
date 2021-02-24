$(document).ready(function(){
	let addTask = $(".plus");
	let input = $(".inputfield");
	let deleteTask = $(".delete");
	addTask.on('click',function(){
		let elem = `<li class="list">
				<div class="col-1">
					<input type = "checkbox" class="check">
				</div>
				<div class="task-content col-2">${input.val()}</div>
				<div class="delete col-3"></div>
			</li>`	
			$('.task-block').append(elem);
			input.val("");
	})
	$('.task-block').on('click','.delete',function(){
		$(this).parent().remove();
	})

	$('.task-block').on('change','.check',function(){
		$(this).parent().next().toggleClass('checked');
	})
})