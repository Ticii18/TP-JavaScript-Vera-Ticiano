// Tu tarea es crear un programa que funcione como un administrador de tareas
// básico. Este programa permitirá al usuario agregar, listar, editar y eliminar tareas de una
// lista.

// Funcionalidades:
// 1. Agregar Tarea: El usuario podrá agregar una nueva tarea a la lista
// proporcionando un nombre para la tarea.
// 2. Listar Tareas: El usuario podrá ver todas las tareas actualmente en la lista.
// 3. Editar Tarea: El usuario podrá modificar el nombre de una tarea existente en la
// lista.
// 4. Eliminar Tarea: El usuario podrá eliminar una tarea de la lista.

function agregarTareas(nombre) {
    tareas.push(nombre);
}

// mostrar el listado de las tareas una alado de otras como funcion

function listarTareas() {
    for (let i = 0; i < tareas.length; i++) {
        console.log(tareas[i]);
    }
}


function editarTarea(index, nombre) {
    tareas[index] = nombre;
}

function eliminarTarea(index) {
    tareas.splice("index", 1);
}

let tareas = [];

//solicitar al usuario que ingrese unas de las opciones, utilizando un bucle y si ingresa 0 termine
let opcion = parseInt(prompt("1. Agregar tarea\n 2.Mostrar lista \n 3. Editar tarea \n 4. Eliminar tarea \n 0. Terminar con el bucle"));
while (opcion!= 0) {
    
    switch (opcion) {
        case 1:
            nombre = prompt("Ingrese el nombre de la tarea");
            agregarTareas(nombre);
            break;
        case 2:
            listarTareas();
            break;
        case 3:
            index = parseInt(prompt("Ingrese el indice de la tarea a editar"));
            nombre = prompt("Ingrese el nuevo nombre de la tarea");
            editarTarea(index, nombre);
            break;
        case 4:
            index = parseInt(prompt("Ingrese el indice de la tarea a eliminar"));
            eliminarTarea(index);
            break;
        default:
            break;
    }
    opcion = parseInt(prompt("1. Agregar tarea\n 2.Mostrar lista \n 3. Editar tarea \n 4. Eliminar tarea \n 0. Terminar con el bucle"));

}


