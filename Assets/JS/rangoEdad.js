// Escribe un programa que pida al usuario su edad y luego le diga en qué
// rango de edad se encuentra: niño (0-12), adolescente (13-19), adulto (20-59), o adulto mayor (60 o más).

let edad = parseInt(prompt ("Ingrese su edad") )

if (edad>0 && edad<=12){
    console.log("Su rango de edad es: Niño ");   
    alert("Su rango de edad es: Niño ")
} else if(edad>13 && edad<=19){
    console.log("Su rango de edad es: Adolecente ");  
    alert("Su rango de edad es: Adolecente ")
} else if (edad>20 && edad<=59){
    console.log("Su rango de edad es: Adulto ");  
    alert("Su rango de edad es: Adulto ")
} else if (edad>60 && edad<=117){
    console.log("Su rango de edad es: Adulto mayor ");
    alert("Su rango de edad es: Adulto mayor ")  
} else{
    console.log("Porfavor ingrese una edad valida")
    alert("Porfavor ingrese una edad valida menores a (117 Edad de la persona mas vieja del mundo) ")
}