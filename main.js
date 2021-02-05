const formulario = document.getElementById('formulario')
const input = document.getElementById('input')
const listaTareas = document.getElementById('listaTareas')
const template = document.getElementById('template').content
//agrupar fragment porque son volatiles 
const fragment = document.createDocumentFragment()
let tareas = { //colección de objectos, para hacer mas rapido el poder obtener un elemento.
    1 : {
        id : 1,
        text: 'Tarea #1',
        estado: false
    }, 
    2 :{
        id : 2,
        text : 'Tarea #2',
        estado: false
    }
}

formulario.addEventListener('submit', e => {
    e.preventDefault()
    //console.log(e.target[0].value)
    setTarea(e)
})

const setTarea = e => {
    if(input.value.trim() === ''){
        console.log('esta vacío')
        return
    }
    console.log('diste clic')

    formulario.reset()
}