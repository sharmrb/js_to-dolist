window.onload= function (){
  
const input = document.getElementById('activity');
const button = document.getElementById(`enter`);
const ul= document.querySelector(`ul`);
const item=document.getElementsByTagName(`li`);

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}



function createlist(){
    var li=document.createElement(`li`);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value=``;
    console.log(`working`)

    function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}

function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}
// button.addEventListener(`click`, createlist)
    button.addEventListener('click', createlist, false);
  console.log(`hii`)
  input.addEventListener("keypress", addListAfterKeypress);

}   