var app = document.getElementById("app");
const input = document.createElement('input');
const button = document.createElement('button');
const header = document.createElement('h2');

//Creación de header h2
header.type = 'h2';
header.innerHTML = 'ToDo APP';
app.appendChild(header);

//Creación de input con placeholde
input.type = 'input';
input.setAttribute("placeholder", "Escribe aqui tu tarea");
input.setAttribute('id','inputTask');
app.appendChild(input);

//Creación de botón
button.type = 'button';
button.innerText='Añadir Tarea';
button.setAttribute('id','btnSave');
app.appendChild(button);





//Crea el elemento tbody
var tableBody = document.createElement("tbody");

//Construye la tabla
function buildTableTasks(){
    var table = document.createElement("table");
    table.appendChild(tableBody);
    document.getElementById("app")
    .appendChild(table);
}

//Setea la tabla al cargar la página
window.onload =  buildTableTasks();

//Variables globaless 
var btnSave = document.getElementById("btnSave");
var task = "";
var tasksArr = [];


//Función del botón guardar
btnSave.addEventListener('click',function(event){
    task =  document.getElementById('inputTask').value;
    tasksArr.push(task);
    console.log(tasksArr);
    document.getElementById('inputTask').value = "";

    var row = document.createElement("tr");
    var col = document. createElement("td");

    

        col.appendChild(document.createTextNode(task));
        row.appendChild(col);


    tableBody.appendChild(row);

});



