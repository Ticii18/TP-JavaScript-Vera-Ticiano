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
    let mensaje = "";
    for (let i = 0; i < tareas.length; i++) {
        mensaje += tareas[i] + "\n";
    }
    alert(mensaje);
}

// editar una tarea

function editarTarea(nombre, nuevoNombre) {
    const indice = tareas.indexOf(nombre);
    if (indice !== -1) {
        tareas[indice] = nuevoNombre;
        alert("Tarea editada correctamente.");
    } else {
        alert("La tarea especificada no se encontró en la lista.");
    }
}





function eliminarTarea(nombre) {
    const indice = tareas.indexOf(nombre);
    if (indice !== -1) {
        tareas.splice(indice, 1);
        alert("Tarea eliminada correctamente.");
    } else {
        alert("La tarea especificada no se encontró en la lista.");
    }
}
let tareas = [];
const regex = /^\S+$/;
let opcion = prompt("1. Agregar tarea\n2. Mostrar lista\n3. Editar tarea\n4. Eliminar tarea\n0. Terminar con el bucle");

while (opcion !== "0") {
    if (opcion.trim() === "" || isNaN(opcion) || parseInt(opcion) < 0 || parseInt(opcion) > 4) {
        alert("Opción no válida. Por favor, ingrese una opción válida.");
    } else {
        switch (parseInt(opcion)) {
            case 1:
                nombre = prompt("Ingrese el nombre de la tarea");
                if (nombre.trim() && isNaN(nombre)) {
                    agregarTareas(nombre);
                } else {
                    alert("El nombre de la tarea no puede estar vacío ni ser un número");
                }
                break;
            case 2:
                if (tareas.length > 0) {
                    listarTareas();
                } else {
                    alert("No hay tareas para mostrar.");
                }
                break;
                case 3:
                    if (tareas.length > 0) {
                        nombre = prompt("Ingrese el nombre de la tarea que desea editar");
                        const indice = tareas.indexOf(nombre);
                        if (indice !== -1) {
                            nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea");
                            if (nuevoNombre.trim() !== "") {
                                editarTarea(nombre, nuevoNombre);
                            } else {
                                alert("El nuevo nombre de la tarea no puede estar vacío");
                            }
                        } else {
                            alert("La tarea especificada no se encontró en la lista.");
                        }
                    } else {
                        alert("No hay tareas para editar.");
                    }
                    break;
                
                
            case 4:
                if (tareas.length > 0) {
                    nombre = prompt("Ingrese el nombre exacto de la tarea a eliminar");
                    if (nombre.trim() !== "" && regex.test(nombre) && isNaN(nombre)) {
                        eliminarTarea(nombre);
                    } else {
                        alert("El nombre de la tarea no puede estar vacío ni ser un número");
                    }
                } else {
                    alert("No hay tareas para eliminar.");
                }
                break;
            default:
                break;
        }
    }

    opcion = prompt("1. Agregar tarea\n2. Mostrar lista\n3. Editar tarea\n4. Eliminar tarea\n0. Terminar con el bucle");
}
