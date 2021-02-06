const app = document.getElementsByTagName("app")
const input = document.createElement('input')
const button = document.createElement('button')
const header = document.createElement('h2')

console.log(app)

header.type = 'h2'
header.innerHTML = 'ToDo APP'
document.body.appendChild(header)

input.type = 'input'
input.setAttribute("placeholder", "Escribe aqui tu tarea")
document.body.appendChild(input)


button.type = 'button'
button.innerText='Añadir Tarea'
document.body.appendChild(button)


$("button").addEventListener("click", function(){ //Listener al evento del botón
    let input = document.createElement('input') 

    console.log('input')
})

function $(selector){
    return document.querySelector(selector); //Selececionar tupo Jquery
}
var row = document.createElement("tr");


function buildTableTasks(){
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    document.getElementById("listTask")
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



