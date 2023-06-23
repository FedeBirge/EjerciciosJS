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

// var num1 = parseInt(prompt("Ingrese un número"));
// var num2 = parseInt(prompt("Ingrese otro número"));
// console.log(
//     `s: suma
//     r: resta
//     m: multiplicación
//     d: división`
// );
// var operacion = prompt("Ingrese la primer letra de la operación que desea realizar");
// switch (operacion) {
//     case "S":
//     case "s": console.log("La suma de los números es " + (num1 + num2)); break;
//     case "R":
//     case "r": console.log("La resta de los números es " + (num1 - num2)); break;
//     case "M":
//     case "m": console.log("La multiplicación de los números es " + (num1 * num2)); break;
//     case "D":
//     case "d": console.log("La división de los números es " + (num1 / num2)); break;
//     default: console.log("La operación ingresada no es válida");
// }
// EJERCICIO 6
//Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.

// var nun = parseInt(prompt("Ingrese un número"));
// console.log(nun == 0 ? "El número no es par ni impar" : nun % 2 == 0 ? "El número es par" : "El número es impar");

// EJERCICIO 7
// 7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
// solicite números al usuario hasta que la suma de los números introducidos supere el
// límite inicial.
// do {
//     var limite = parseInt(prompt("Ingrese un valor límite positivo"));
// } while (limite <= 0);
// var suma = 0;
// do {
//     var num = parseInt(prompt("Ingrese un número"));
//     suma += num;
//     console.log(suma);
// }
// while (suma < limite);

// EJERCICIO 8
// 8. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
// programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
// todos ellos.
// var min = 0;
// var max = 0;
// var suma = 0;
// var cant = 0;
// do {
//     var num = parseInt(prompt("Ingrese un número"));
//     if (num > max) { max = num; };
//     if (num < min) { min = num; };
//     suma += num;
//     cant++;
// }
// while (num != 0);
// console.log("El máximo número ingresado es " + max);
// console.log("El mínimo número ingresado es " + min);
// console.log("El promedio de los números ingresados es " + (suma / cant));

// EJERCICIO 9
//9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
// espacio entre cada letra.La frase se mostrara así: H o l a.Nota: recordar el
// funcionamiento de la función Substring().
// var frase = prompt("Ingrese una frase");
// var fraseEspaciada = "";
// for (var i = 0; i < frase.length; i++) {
//     fraseEspaciada += frase.substring(i, i + 1) + " ";
// }
// console.log(fraseEspaciada);

// EJERCICIO 10
// 10.Escribir una función flecha que reciba una palabra y la devuelva al revés.
// var palabra = prompt("Ingrese una palabra");
// let funcion = (palabra) => { return palabra.split("").reverse().join(""); }
// console.log(funcion(palabra));

// EJERCICIO 11

// 11. Escribir una función que reciba un String y devuelva la palabra más larga.
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado: “JavaScript”
// var frase = prompt("Ingrese una frase");
// let funcion = (frase) => { return frase.split(" ").reduce((a, b) => a.length > b.length ? a : b); }
// console.log(funcion(frase));

// EJERCICIO 12
// 12. Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
// dato.
// var dato = prompt("Ingrese un dato");
// // let funcion = (dato) => { return typeof dato; }
// // console.log(funcion(dato));

// EJERCICIO 13
// 13. . Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
// 'O' otro), peso y altura.A continuación, muestre las propiedades del objeto JavaScript.
// var persona = { nombre: "Juan", edad: 25, sexo: "H", peso: 80, altura: 1.80 };
// console.log(persona);

// EJERCICIO 14

// 14. . Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
// Número de páginas.Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
// numero de páginas
// var libro = { ISBN: 0, titulo: "", autor: "", paginas: 0 };
// libro.ISBN = parseInt(prompt("Ingrese el ISBN del libro"));
// libro.titulo = prompt("Ingrese el título del libro");
// libro.autor = prompt("Ingrese el autor del libro");
// libro.paginas = parseInt(prompt("Ingrese el número de páginas del libro"));
// console.log(libro);

// EJERCICIO 15
// 15.15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
// con la propiedad radio.Nota: Cree dos métodos para calcular el área y el perímetro.El
// radio del círculo lo proporcionará el usuario.
// var circulo = { radio: 0, area: 0, perimetro: 0 };
// circulo.radio = parseInt(prompt("Ingrese el radio del círculo"));
// circulo.area = Math.PI * Math.pow(circulo.radio, 2);
// circulo.perimetro = 2 * Math.PI * circulo.radio;
// console.log(circulo);

// EJERCICIO 16
// 16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla
// var vector1 = [];
// var vector2 = [];
// for (var i = 0; i < 5; i++) {
//     vector1.push(Math.floor(Math.random() * 10));
//     vector2.push(Math.floor(Math.random() * 10));
// }
// console.log(vector1);
// console.log(vector2);

// EJERCICIO 17

// 17.. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
//resultado
// var vector = [1, 2, 3, 4, 5];
// vector.pop();
// vector.pop();
// console.log(vector);

// EJERCICIO 18
// 18.18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos
// var valores = [true, 5, false, "hola", "adios", 2];
// console.log(valores[3].length > valores[4].length ? valores[3] : valores[4]);
// console.log(valores[0] && valores[2]);
// console.log(valores[0] || valores[2]);
// console.log(valores[1] + valores[5]);
// console.log(valores[1] - valores[5]);
// console.log(valores[1] * valores[5]);
// console.log(valores[1] / valores[5]);
// console.log(valores[1] % valores[5]);

// EJERCICIO 19

// Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
// de 50 números reales, y el segundo B, un arreglo de 20 números, también reales.El
// programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
// Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
// ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
// 0.5.Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
// de 20.

// let A = [];
// let B = [];
// console.log("Arreglo A");
// for (let i = 0; i < 50; i++) {
//     A.push(Math.floor(Math.random() * 100));
// }
// console.log(A);
// A.sort(function (a, b) { return a - b; });
// console.log("Arreglo A ordenado");
// console.log(A);
// for (let i = 0; i < 10; i++) {
//     B.push(A[i]);
// }
// for (let i = 10; i < 20; i++) {
//     B.push(0.5);
// }
// console.log("Arreglo B");
// console.log(B);

// EJERCICIO 20
// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// muestre el siguiente array[6, 9, 12, 15, 18].
// let matriz = [[3], [6], [9], [12], [15]];
// let array = [];
// for (let i = 0; i < matriz.length; i++) {
//     array.push(matriz[i][0] + 3);
// }
// console.log(array);

// EJERCICIO 21
// 21. Escribir un programa para obtener un array de los valores de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo('H' hombre, 'M' mujer, 'O' otro), peso y altura.
// var persona = { nombre: "Juan", edad: 25, sexo: "H", peso: 80, altura: 1.80 };
// var array = [];
// for (const key in persona) {
//     array.push(persona[key]);
// }
// console.log(array);

// EJERCICIO 22
// Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
//elección.
// function mensaje() {
//     alert("Hola Mundo");
// }

// EJERCICIO 23
// Resalte todas las palabras de más de 8 caracteres en el texto del párrafo(con un fondo
// amarillo, por ejemplo)
// function resaltar() {
//     let parrafo = document.getElementById("parrafo");
//     let palabras = parrafo.innerHTML.split(" ");
//     let texto = "";
//     for (let i = 0; i < palabras.length; i++) {
//         if (palabras[i].length > 8) {
//             texto += "<span style='background-color: yellow'>" + palabras[i] + "</span> ";
//         } else {
//             texto += palabras[i] + " ";
//         }
//     }
//     parrafo.innerHTML = texto;
// }

// EJERCICIO 24
// Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
// circulo y lo muestre en el HTML
// function calcular() {
//     let perimetro = document.getElementById("perimetro").value;
//     let radio = perimetro / (Math.PI * 2);
//     console.log(radio);
//     document.getElementById("radio").innerHTML = radio;

// }

// EJERCICIO 25
// . Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
// siguiente formulario.
// < !DOCTYPE html >
//     <html><head>
//         <meta charset=utf-8 />
//         <title>Obtener nombre y apellido de form </title>
//     </head><body>
//             <form id="form1" onsubmit="getFormValores()">
//                 Nombre: <input type="text" name="nombre" value="David"><br>
//                     Apellido: <input type="text" name="apellido" value="Beckham"><br>
//                         <input type="submit" value="Submit">
//                         </form>
//                     </body>
//                     </html>

// function getFormValores() {
//     let formulario = document.getElementById("form1");
//     let nombre = formulario.nombre.value;
//     let apellido = formulario.apellido.value;
//     console.log(nombre + " " + apellido);
// }


