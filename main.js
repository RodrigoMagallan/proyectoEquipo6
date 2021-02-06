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
