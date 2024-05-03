// Escriba un programa que pida al usuario un número del 1 al 7 y luego
// muestre el día de la semana correspondiente (1 para "Lunes", 2 para "Martes", etc.)


let dia = parseInt(prompt("Ingrese un numero del 1-7"))

switch (dia) {
    case 1:
        windows.alert("Dia Lunes");
        log("Dia Lunes");
        break;
    case 2:
        console.log("Dia Martes");
        alert("Dia Martes");
        break;
    case 3:
        console.log("Dia Miercoles");
        alert("Dia Miercoles");
        break;
    case 4:
        console.log("Dia Jueves");
        alert("Dia Jueves");
        break;
    case 5:
        console.log("Dia Viernes");
        alert("Dia Viernes");
        break;
    case 6:
        console.log("Dia Sabado");
        alert("Dia Sabado");
        break;
    case 7:
        console.log("Dia Domingo");
        alert("Dia Domingo");
        break;
    default:
        console.log("El Numero que ingreso no es valido para un dia de la semana");
        alert("El Numero que ingreso no es valido para un dia de la semana");
        break;
}

