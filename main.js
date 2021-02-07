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
input.setAttribute("placeholder", "Writte a task here");
input.setAttribute('id','inputTask');
app.appendChild(input);

//Creación de botón
button.type = 'button';
button.innerText='Add a task';
button.setAttribute('id','btnSave');
app.appendChild(button);

//Crea el elemento tbody
var tableBody = document.createElement("tbody");

//Construye la tabla
function buildTableTasks(){
    var table = document.createElement("table");
    table.setAttribute('id','tableTask');
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
var btnDelete = document.getElementById("btnDelete");


//Función del botón guardar
btnSave.addEventListener('click',function(event){

if(document.getElementById('inputTask').value == ""){
    window.alert("No se puede agregar un registro vacio");
}else{
    task =  document.getElementById('inputTask').value;
    tasksArr.push(task);
    console.log(tasksArr);
    var row = document.createElement("tr");
    var col = document.createElement("td");
    var btnDelete = document.createElement("button");
    btnDelete.type = 'button';
    btnDelete.setAttribute('id','btnDelete');
    btnDelete.innerText= "Delete";
    var checkTask = document.createElement("input");
    checkTask.type = "checkbox";
        col.appendChild(checkTask);
        col.appendChild(document.createTextNode(task));
        col.appendChild(btnDelete);
        row.appendChild(col);
    tableBody.appendChild(row);
    document.getElementById('inputTask').value = "";
}
//Funcionalidad del botón de eliminar
btnDelete.addEventListener('click',function (event) {
    var i = this.parentNode.parentNode.rowIndex; //Elimina la fila en la que se de click
    document.getElementById('tableTask').deleteRow(i);
 })
 
});


