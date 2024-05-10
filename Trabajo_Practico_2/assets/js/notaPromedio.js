// Crea un programa que pida la nota de un estudiante en los tres trimestres del curso
// y calcule la nota promedio. Tener en cuenta que, solo se pueden ingresar números
// del 1 al 10 . El resultado que dará será el siguiente:
// - 'Nota Insuficiente' si la el promedio está entre 1 y 3,
// - 'Nota Regular' si está entre 4 y 5,
// - 'Nota Buena' si está entre 6 y 7,
// - 'Nota Muy Buena' si está entre 8 y 9 y
// - 'Nota Sobresaliente' si es igual a 10.

let nota1 = parseInt(prompt("Ingrese la nota del primer trimestre"));
let nota2 = parseInt(prompt("Ingrese la nota del segundo trimestre"));
let nota3 = parseInt(prompt("Ingrese la nota del tercer trimestre"));

// se verifica si las notas son mayores a 0 y menores a 10
if (nota1 >= 1 && nota1 <= 10 && nota2 >= 1 && nota2 <= 10 && nota3 >= 1 && nota3 <= 10) {
    let promedio = (nota1 + nota2 + nota3) / 3;

    switch (true) {
        case promedio >= 1 && promedio <= 3:
            console.log("Nota Insuficiente");
            break;
        case promedio >= 4 && promedio <= 5:
            console.log("Nota Regular");
            break;
        case promedio >= 6 && promedio <= 7:
            console.log("Nota Buena");
            break;
        case promedio >= 8 && promedio <= 9:
            console.log("Nota Muy Buena");
            break;
        case promedio === 10:
            console.log("Nota Sobresaliente");
            break;
        default:
            console.log("Error en el cálculo del promedio.");
    }
} else {
    console.log("Ingrese números válidos (del 1 al 10) para las notas.");
}


