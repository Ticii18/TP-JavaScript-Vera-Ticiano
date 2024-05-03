// Escriba un programa que pida al usuario un número del 1 al 7 y luego
// muestre el día de la semana correspondiente (1 para "Lunes", 2 para "Martes", etc.)


let dia = parseInt(prompt("Ingrese un numero del 1-7"))

switch (dia) {
    case 1:
        document.write("Dia Lunes");
        console.log("Dia Lunes");
        break;
    case 2:
        document.write("Dia Martes");
        console.log("Dia Martes");
        break;
    case 3:
        document.write("Dia Miercoles");
        console.log("Dia Miercoles");
        break;
    case 4:
        document.write("Dia Jueves");
        console.log("Dia Jueves");
        break;
    case 5:
        document.write("Dia Viernes");
        console.log("Dia Viernes");
        break;
    case 6:
        document.write("Dia Sabado");
        console.log("Dia Sabado");
        break;
    case 7:
        document.write("Dia Domingo");
        console.log("Dia Domingo");
        break;
    default:
        console.log("El Numero que ingreso no es valido para un dia de la semana");
        document.write("El Numero que ingreso no es valido para un dia de la semana");
        break;
}