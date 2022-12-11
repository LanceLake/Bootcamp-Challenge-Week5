$(function () {

	var now = dayjs();
	var longDate = now.$d;
	var hour = dayjs().hour();
	var currentDay = document.getElementById('currentDay');
	currentDay.textContent = "Today is " + longDate;

	for(i = 8;i < 18; i++) 
	{
		var rowId = document.getElementById('hour-' + i);
		var saveButton = document.getElementById('button-' + i);

		var newClass = "future"
		
		if(hour < i) {newClass = "past"};
		if(hour == i) {newClass = "present"}

		rowId.classList.add(newClass);

		(function(index) 
		{
			var noteData = document.getElementById('text-' + index);
			noteData.value = localStorage.getItem('data-' + index);

			saveButton.addEventListener("click", function() 
			{
				localStorage.setItem('data-' + index, noteData.value);
				return;
			});
		}
		)(i);
	}
});
