const app = document.getElementsByTagName("app")
const input = document.createElement('input')
const button = document.createElement('button')
const header = document.createElement('h2')

console.log(app)

header.type = 'h2'
header.innerHTML = 'ToDo APP'
document.body.appendChild(header)

input.type = 'input'
input.innerText='¿Que tarea quieres agregar?'
document.body.appendChild(input)

button.type = 'button'
button.innerText='Añadir Tarea'
document.body.appendChild(button)
