/*


WHEN I click into a timeblock
THEN I can enter an event

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist

https://day.js.org/docs/en/get-set/get-set

*/


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.




$(function () {

	var now = dayjs();
	var longDate = now.$d;
	var hour = dayjs().hour();
                             
	var currentDay = document.getElementById('currentDay');
	currentDay.textContent = "Today is " + longDate;

	for(i = 8;i < 18; i++) 
	{
		var rowId = document.getElementById('hour-' + i);
		var noteId = document.getElementById('text-' + i);
		var noteData = document.getElementById('text-' + i).value;
		var saveButton = document.getElementById('button-' + i);

		var newClass = "future"
		
		if(hour < i) {newClass = "past"};
		if(hour == i) {newClass = "present"}

		rowId.classList.add(newClass);

		noteId.textContent = localStorage.getItem('data-' + i);

		saveButton.addEventListener("click", function() 
		{
//			console.log(document.getElementById('text-' + i).value);
			console.log(i,noteData);
			saveData(i,noteData);
		});
	}
});

function saveData(i, note)
	{
		localStorage.setItem('data-' + i, note);
		return;
	};
