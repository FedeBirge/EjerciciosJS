// EJERCICIO 1
// 1. Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
// hoy ? (soleado, nublado, lloviendo).A continuación, mostrar por pantalla un mensaje que
// indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.

// var dia = prompt(" ¿cómo está el día de hoy? (soleado, nublado, lloviendo)");
// console.log("El día de hoy está " + dia);

// EJERCICIO 2
// 2. Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro.Recuerde que
// para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio

// var radio = prompt("Ingrese el radio de la circunferencia");
// var area = Math.PI * Math.pow(radio, 2);
// var perimetro = 2 * Math.PI * radio;
// console.log("El área de la circunferencia es " + area);
// console.log("El perímetro de la circunferencia es " + perimetro);

// EJERCICIO 3
// 3. Escriba un programa en donde se pida la edad del usuario.Si el usuario es mayor de
// edad se debe mostrar un mensaje indicándolo.
// var edad = prompt("Ingrese su edad");
// if (edad >= 18) { console.log("Usted es mayor de edad"); }

// EJERCICIO 4
// 4. Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.

// var caracter = prompt("Ingrese un caracter");
// console.log(caracter == "S" || caracter == "N" ? "CORRECTO" : "INCORRECTO");

// EJERCICIO 5
//  Construir un programa que simule un menú de opciones para realizar las cuatro
// operaciones aritméticas básicas(suma, resta, multiplicación y división) con dos valores
// numéricos enteros.El usuario, además, debe especificar la operación con el primer
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.

var num1 = parseInt(prompt("Ingrese un número"));
var num2 = parseInt(prompt("Ingrese otro número"));
console.log(
    ´s: suma,
    r: resta,
    m: multiplicación
    d: división´
);
var operacion = prompt("Ingrese la primer letra de la operación que desea realizar");
switch (operacion) {
    case "S":
    case "s": console.log("La suma de los números es " + (num1 + num2)); break;
    case "R":
    case "r": console.log("La resta de los números es " + (num1 - num2)); break;
    case "M":
    case "m": console.log("La multiplicación de los números es " + (num1 * num2)); break;
    case "D":
    case "d": console.log("La división de los números es " + (num1 / num2)); break;
    default: console.log("La operación ingresada no es válida");
}
