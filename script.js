const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
var regex = /^(?!\s*$)[\wğüşıöçĞÜŞİÖÇ\s.,!'"-]+$/;





function addTask() {

  if (!regex.test(inputBox.value)) {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    li.style.marginBottom = "25px";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
 saveData();
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask(); // Enter tuşuna basıldığında addTask fonksiyonunu çağır
    }
});

function duzlem() {
  inputBox.setAttribute("placeholder", "");
  inputBox.addEventListener("blur", function () {
    inputBox.setAttribute("placeholder", "Add your text!");
  });
}

listContainer.addEventListener("click", function (e) {

  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
	  saveData();


  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
saveData();
  }

}, false);
function saveData(){
	
	
	
	localStorage.setItem("data",listContainer.innerHTML);
}
function getback(){
	
	
	
	
	listContainer.innerHTML=localStorage.getItem("data");
}
getback();