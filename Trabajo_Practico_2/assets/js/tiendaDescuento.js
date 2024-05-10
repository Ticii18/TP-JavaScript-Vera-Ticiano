// Una tienda aplica un descuento del 15% para las compras que incluyan 10
// artículos o más iguales cuyo precio total sea superior a 20000 pesos. Tu programa
// debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y
// el precio. Tener en cuenta que, solo se pueden ingresar números mayores a 1, y
// además, si la cantidad y el monto supera lo establecido, el descuento deberá
// aplicarse al precio total para luego mostrar en pantalla un mensaje que lo
// confirme. De lo contrario, indicar que no se superó la cantidad o el precio, según
// corresponda.

let articulos = parseInt(prompt("Ingrese la cantidad de articulos"));

let precio = parseInt(prompt("Ingrese el precio de los articulos"));

if (articulos >= 10 && precio > 20000){
    let descuento = (precio * 15) / 100;
    let total = precio - descuento;
    console.log("El total a pagar es: " + total);
    alert("El total a pagar es: " + total);
}else if (articulos === 1){
    console.log("porfavor, usted debe comprar mas de un producto");
}else if (articulos>=0 && articulos<=9 ){
    console.log("Usted no supera la compra de 10 articulos para el descuento");
    console.log("usted debera pagar:" + precio);
}
else if (articulos>= 10 && precio <= 20000){
    console.log("No se supero la cantidad o el precio");
    alert("No se supero la cantidad o el precio, Usted debera pagar : "+precio);
}else {
    console.log("Ingrese numeros validos");
    alert("Ingrese numeros validos");
}