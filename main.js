const app = document.getElementsByTagName("app")
const input = document.createElement('input')
const button = document.createElement('button')
const header = document.createElement('h2')

console.log(app)

//Creación de header h2
header.type = 'h2'
header.innerHTML = 'ToDo APP'
document.body.appendChild(header)

//Creación de input con placeholde
input.type = 'input'
input.setAttribute("placeholder", "Escribe aqui tu tarea")
document.body.appendChild(input)

//Creación de botón
button.type = 'button'
button.innerText='Añadir Tarea'
document.body.appendChild(button)


