const app = document.getElementsByTagName("app");
const input = document.createElement('input');
const button = document.createElement('button');
const header = document.createElement('h2');

console.log(app);

//Creación de header h2
header.type = 'h2';
header.innerHTML = 'ToDo APP';
document.body.appendChild(header);

//Creación de input con placeholde
input.type = 'input';
input.setAttribute("placeholder", "Escribe aqui tu tarea");
input.setAttribute('id','inputTask');
document.body.appendChild(input);

//Creación de botón
button.type = 'button';
button.innerText='Añadir Tarea';
button.setAttribute('id','btnSave');
document.body.appendChild(button);





var row = document.createElement("tr");


function buildTableTasks(){
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    document.getElementById("app")
    .appendChild(table);
}

window.onload =  buildTableTasks();

//Variables globaless 
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



