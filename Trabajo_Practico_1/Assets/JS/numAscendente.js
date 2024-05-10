//Escribe un programa que pida al usuario tres números y luego los muestre
// en orden ascendente.

let num1 = parseInt(prompt("Ingrese Numeros enteros a comparar"));
let num2 = parseInt(prompt("Ingrese Numeros enteros a comparar"));
let num3 = parseInt(prompt("Ingrese Numeros enteros a comparar"));

// Comparo si el numero 1 es mayor a los demas
if (num1 > num2 && num1 > num3) {
    console.log("El numero mayor es: " + num1);
    console.log("El numero del medio es: " + num2);
    console.log("El numero mas pequeño es " + num3);
    alert("Los numeros en orden ascendente son: " + "  " + num3 + " - " + num2 + " - " + num1);
} 
// comparo si el num 2 es mayor a los demas
else if (num1 < num2 && num2 > num3) {
    console.log("El numero mayor es: " + num2);
    console.log("El numero del medio es: " + num1);
    console.log("El numero mas pequeño es " + num3);
    alert("Los numeros en orden ascendente son: " + " " + num3 + " - " + num2 + " - " + num1);
} 
// comparo si el num 3 es mayor a los de mas y el 2 es mayor al numero 1
else if (num3 > num2 && num2 > num1) {
    console.log("El numero mayor es: " + num3);
    console.log("El numero del medio es: " + num2);
    console.log("El numero mas pequeño es " + num1);
    alert("Los numeros en orden ascendente son: " + " " + num1 + " - " + num2 + " - " + num3);
} 
// comparo si el num 3 es mayor a los de mas y el 1 es mayor al numero 2
else if (num3 > num2 && num2 < num1) {
    console.log("El numero mayor es: " + num3);
    console.log("El numero del medio es: " + num1);
    console.log("El numero mas pequeño es " + num2);
    alert("Los numeros en orden ascendente son: " + "  " + num2 + " - " + num1 + " - " + num3);

} 
// en caso que dos numeros sean iguales aca se van comparando hasta que se encuentre el mayor o menor de dichos numeros
else if (num1 == num2 && num2> num3) {
    console.log("Los numeros: " + num1 + " y " + num2 + " Son iguales el numero: " + num3 + " es el mas pequeño");
    console.log("El numero mayor es: " + num1);
    console.log("El numero del medio es: " + num2);
    console.log("El numero mas pequeño es " + num3);

}else if (num1 == num2 && num2 < num3) {
    console.log(num3 + " Es mayor" + " ya que los numeros: " + num1 + " y " + num2 + " Son iguales el numero: ");

    console.log("El numero mayor es: " + num3);
    console.log("El numero del medio es: " + num1);
    console.log("El numero mas pequeño es " + num2);
}
else if (num2 == num3 && num2 > num1) {
    console.log("Los numeros: " + num2 + " y " + num3 + " Son iguales el numero:" + num1 + " Es el mas pequeño");

    console.log("El numero mayor es: " + num2);
    console.log("El numero del medio es: " + num3);
    console.log("El numero mas pequeño es " + num1);

}
else if (num2 == num3 && num2 < num1) {
    console.log(num1 + " Es mayor" + " ya que los numeros: " + num2 + " y " + num3 + " Son iguales");
    console.log("El numero mayor es: " + num1);
    console.log("El numero del medio es: " + num2);
    console.log("El numero mas pequeño es " + num3);
}
else if (num1 == num3 && num1 > num2) {
    console.log("Los numeros: " + num1 + " y " + num3 + " Son iguales el numero:" + num2 + " Es el mas pequeño");
    console.log("El numero mayor es: " + num1);
    console.log("El numero del medio es: " + num3);
    console.log("El numero mas pequeño es " + num2);
}else if (num1 == num3 && num1 < num2) {
    console.log(num2 + " Es mayor" + " ya que los numeros:  " + num1 + " y " + num3 + " Son iguales");
    console.log("El numero mayor es: " + num2);
    console.log("El numero del medio es: " + num1);
    console.log("El numero mas pequeño es " + num3);
}else if (num1 == num2 && num2 == num3 && num1 == num3) {
    alert("Los numeros son iguales");
} else {
    alert("Ingrese numeros validos")
}