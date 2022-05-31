var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delBtn = document.createElement("button");
	div.classList.add("listgroup");
	ul.appendChild(div);
	div.append(li, delBtn);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delBtn.classList.add("delClass");
	delBtn.innerHTML ="Delete";
	
}
function doneTask(task){
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}

}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

ul.addEventListener("click", handleUlClick)

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);