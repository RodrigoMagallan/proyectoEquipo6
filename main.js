//Declaraación de variables para  obtener y creaer elementos por medio del DOM
var app = document.getElementById("app");
const input = document.createElement('input');
const button = document.createElement('button');
const header = document.createElement('h1');


//Creación de header h1
header.type = 'h1';
header.innerHTML = 'ToDo APP';
header.setAttribute('class', 'title');
app.appendChild(header);

//Creación de input con placeholder
input.type = 'input';
input.setAttribute("placeholder", "Write a task here");
input.setAttribute('id', 'inputTask');
app.appendChild(input);

//Creación de botón
button.type = 'button';
button.innerText = 'Add a task';
button.setAttribute('id', 'btnSave');
app.appendChild(button);

//Crea el elemento tbody
var tableBody = document.createElement("tbody");

//Construye la tabla
function buildTableTasks() {
    var table = document.createElement("table");
    table.setAttribute('id', 'tableTask');
    table.appendChild(tableBody);
    document.getElementById("app")
        .appendChild(table);
}

//Setea la tabla al cargar la página
window.onload = buildTableTasks();

//Variables globaless 
var btnSave = document.getElementById("btnSave");
var task = "";
var tasksArr = [];
var btnDelete = document.getElementById("btnDelete");


//Función del botón guardar, genera los campos, botones y checks
btnSave.addEventListener('click', function (event) {

    if (document.getElementById('inputTask').value == "") {
        window.alert("No se puede agregar un registro vacio");
    } else {
        task = document.getElementById('inputTask').value;
        tasksArr.push(task);
        //Variables locales
        var row = document.createElement("tr");
        var col = document.createElement("td");
        var colCheck = document.createElement("td");
        var colBtn = document.createElement("td");
        var btnDelete = document.createElement("button");
        var checkTask = document.createElement("input");
        var pe = document.createElement('p');
        pe.setAttribute('id', 'text');
        checkTask.setAttribute('class', 'check');
        checkTask.setAttribute('id', 'checkLi');
        btnDelete.type = 'button';
        btnDelete.setAttribute('id', 'btnDelete');
        btnDelete.innerText = "Delete";
        checkTask.type = "checkbox";
        colCheck.appendChild(checkTask);
        row.appendChild(colCheck);
        pe.appendChild(document.createTextNode(task));
        row.appendChild(pe);
        colBtn.appendChild(btnDelete);
        row.appendChild(colBtn);
        tableBody.appendChild(row);
        document.getElementById('inputTask').value = "";
    }
    //Funcionalidad del botón de eliminar
    btnDelete.addEventListener('click', function (event) {
        var i = this.parentNode.parentNode.rowIndex; //Elimina la fila en la que se de click
        document.getElementById('tableTask').deleteRow(i);
    })


    //Agregar linea de marcado
    
    checkTask.addEventListener('change', function () {
        var i = this.parentNode.parentNode.rowIndex;
        if (this.checked) {
            pe.setAttribute('class', 'checkList');
        } else {
            pe.removeAttribute('class', 'checkList');
        }
    });

});







