var row = document.createElement("tr");


function buildTableTasks(){
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    document.getElementById("listTask")
    .appendChild(table);
}

window.onload =  buildTableTasks();



//Variables globales
var btnSave = document.getElementById("btnSave");
var task = "";
var tasksArr = [];


//Función del botón guardar
btnSave.addEventListener('click',function(event){
    task = { tasks: document.getElementById('inputTask').value};
    tasksArr.push(task);
    console.log(tasksArr);
    document.getElementById('inputTask').value = "";
});



