// Escriba un programa que pida al usuario un número y luego muestre si es
// par o impar.

let numero = parseInt(prompt("Ingrese un numero"))

if (numero % 2 == 0) {
    console.log("El numero es par");
    alert("El numero es par");
} else {
    console.log("El numero es impar");
    alert("El numero es impar");
}