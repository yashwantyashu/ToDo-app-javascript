console.log("script loaded");

const inputTaskBox = document.getElementById("input-task");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("addTaskButton");
button.addEventListener("click",addTask);

function addTask(){
     if(inputTaskBox.value === ''){
        alert("Add your task here!");
        console.log('clicked');
     }
     else{
        let li = document.createElement("li");
        li.innerHTML = inputTaskBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
     }
     inputTaskBox.value = " ";
     storeTasks();
}

listContainer.addEventListener("click",function(e){
   if(e.target.tagName === 'LI'){
      e.target.classList.toggle("checked");
      storeTasks();
   }
   else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      storeTasks();
   }
},false);

function storeTasks(){
   localStorage.setItem("tasks", listContainer.innerHTML);
}

function retrieveTask(){
   listContainer.innerHTML=localStorage.getItem("tasks");
}
retrieveTask();