
// Escribe una función que tome dos números como argumentos y devuelva su suma.
//escribe tu código aquí
function suma(a, b) {
}   return a + b;
    let resultado0 = suma(2, 2);
    console.log(resultado);

//2. Escribe una función que tome dos números como argumentos y devuelva su resta.
//escribe tu código aquí
function resta(a, b) {
} return a - b;
    let resultados = resta(5, 3);
    console.log(resultado);

    
//3. Escribe una función que tome dos números como argumentos y devuelva su producto.
//escribe tu código aquí
function producto(a, b) {
} return a * b;
    let resultadoA = producto(4, 3);
    console.log(resultado);

//4. Escribe una función que tome dos números como argumentos y devuelva su división.
function division(a, b) {
} return a / b;
    let resultadoB = division(8, 2);
    console.log(resultado);

//5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.
//escribe tu código aquí
function potencia(base, exponente) {
} return Math.pow(base, exponente); 
let resultadoC = potencia(6, 9);
console.log(resultado);


//6. Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.
function resto(a, b) {
} return a % b;
    let resultadoD = resto(10, 3);
console.log(resultado);
    

//7. Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.
//escribe tu código aquí
function raizCuadrada(a) {
} return Math.sqrt(a);
    let resultadoE = raizCuadrada(16);
    console.log(resultado);
    

//8. Escribe una función que tome un número como argumento y devuelva su valor absoluto.
//escribe tu código aquí
function valorAbsoluto(a) {
} return Math.abs(a);
    let resultadoF = valorAbsoluto(-5);
console.log(resultado);
    

//9. Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.
//escribe tu código aquí
function redondear(a) {
} return Math.round(a);
    let resultadoG = redondear(4.7);
    console.log(resultado);

//10. Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.
//escribe tu código aquí
function numeroAleatorio() {
} return Math.random();
    let resultado = numeroAleatorio();
    console.log(resultado);


//## Letras:

//1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.
function concatenar(cadena1, cadena2) {
} return cadena1 + cadena2;
    let result = concatenar("Hi", " coders!");
    console.log(resultado);
//2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.
function longitud(cadena) {
} return cadena.length;
    let resto = longitud("Hola, mundo!");
console.log(resultado);
    
//3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function toUpperCase(cadena) {
} return cadena.toUpperCase();
let  resultado1 = toUpperCase("hija de dios!");
console.log(toUpperCase("hija de dios!"));


//4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

function toLowerCase(cadena) {
} return cadena.toLowerCase();
let resultado2 = toLowerCase("HIJA DE DIOS!");
console.log(resultado2);


//5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.

function getCaracter(cadena, indice) {
} return cadena.charAt(indice);
let resultado3 = getCaracter("Hija de Dios!", 4);
console.log(resultado3);

//6. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

function invertirCadena(cadena) {
} return cadena.split("").reverse().join("");
let resultado4 = invertirCadena("Hija de Dios!");
console.log(resultado4);


//7. Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

function contarCaracter(cadena, caracter) {
} return cadena.split(caracter).length - 1;
let resultado5 = contarCaracter("Hija de Dios!", "a");
console.log(resultado5);


//8. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.

function eliminarEspacios(cadena) {
} return cadena.replace(/\s+/g, "");
console.log(eliminarEspacios("Hija de Dios!"));


//9. Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

function esPalindromo(cadena) {
} return cadena === cadena.split("").reverse().join("");   
let resultado6 = esPalindromo("oso");
console.log(resultado6);    


//10. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

function capitalizarPalabras(cadena) {
} return cadena.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");
let resultado7 = capitalizarPalabras("hija de dios!");
console.log(resultado7);


//## Arrays:

//1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.
function sumaArray(array) {
} return array.reduce((acumulador, numero) => acumulador + numero, 0);
let resultado8 = sumaArray([1, 2, 3, 4]);   
console.log(resultado8);


//2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

function promedioArray(array) {
} return array.reduce((acumulador, numero) => acumulador + numero, 0) / array.length;
let resultado9 = promedioArray([1, 2, 3, 4]);   
//3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.
function ordenarArrayAscendente(array) {
} return array.sort((a, b) => a - b);       
let resultado10 = ordenarArrayAscendente([4, 2, 3, 1]);  
console.log(resultado10);


//4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

function filtrarMayores(array, numero) {
} return array.filter(elemento => elemento > numero);
let resultado11 = filtrarMayores([1, 2, 3, 4], 2);
console.log(resultado11);


//5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

function concatenarArrays(array1, array2) {
} return array1.concat(array2);
let resultado12 = concatenarArrays([1, 2, 3], [4, 5, 6]);  
console.log(resultado12);


//6. Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array

function maximoArray(array) {
}   return Math.max(...array);
let resultado13 = maximoArray([1, 2, 3, 4]);
console.log(resultado13);

//7. Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

function minimoArray(array) {
} return Math.min(...array);
let resultado14 = minimoArray([1, 2, 3, 4]);
console.log(resultado14);


//8. Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

function contarElemento(array, elemento) {
}   return array.filter(item => item === elemento).length;
let resultado15 = contarElemento([1, 2, 3, 1, 4], 1);   
console.log(resultado15);


//9. Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

function eliminarDuplicados(array) {
} return [...new Set(array)];  
let resultado16 = eliminarDuplicados([1, 2, 3, 1, 4]);
console.log(resultado16);


//10. Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

function invertirArray(array) {
} return array.reverse();
let resultado17 = invertirArray([1, 2, 3, 4]);  
console.log(resultado17);


//## Objetos:

//## Objetos literales:

//1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

function obtenerNombre(objeto) {
} return objeto.nombre;
let resultado18 = obtenerNombre({ nombre: "Soraya", edad: 10 });
console.log(resultado18);


//2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

function actualizarEdad(objeto, nuevaEdad) {
} objeto.edad = nuevaEdad;
return objeto;
let resultado19 = actualizarEdad({ nombre: "Soraya", edad: 10 }, 11);
console.log(resultado19);


//3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.

function agregarPropiedad(objeto, propiedad) {
} objeto[propiedad] = null;
return objeto;
let resultado20 = agregarPropiedad({ nombre: "Soraya", edad: 10 }, "altura");
console.log(resultado20);


//4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

function eliminarPropiedad(objeto, propiedad) {
} objeto[propiedad] = undefined;
return objeto;  
let resultado21 = eliminarPropiedad({ nombre: "Soraya", edad: 10 }, "edad");
console.log(resultado21);


//5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

function contarPropiedades(objeto) {
} return Object.keys(objeto).length;
let resultado22 = contarPropiedades({ nombre: "Soraya", edad: 10 });
console.log(resultado22);


//6.Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.

function tienePropiedad(objeto, propiedad) {
} return objeto.hasOwnProperty(propiedad); 
const persona = { nombre: "Soraya", edad: 10 };
let resultado23 = tienePropiedad(persona, "nombre");
console.log(resultado23);


//7. Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.

function obtenerValores(objeto) {
} return Object.values(objeto);
let resultado24 = obtenerValores({ nombre: "Soraya", edad: 10 });
console.log(resultado24);


//8. Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.

function sonIguales(objeto1, objeto2) {
} return JSON.stringify(objeto1) === JSON.stringify(objeto2);
let resultado25 = sonIguales({ nombre: "Soraya", edad: 10 }, { nombre: "Soraya", edad: 10 });   
console.log(resultado25);


//9. Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.

function copiarObjeto(objeto) {
} return { ...objeto };
let resultado26 = copiarObjeto({ nombre: "Soraya", edad: 10 }); 
console.log(resultado26);


//10.Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.

function combinarObjetos(objeto1, objeto2) {
} return { ...objeto1, ...objeto2 };
let resultado27 = combinarObjetos({ nombre: "Soraya", edad: 10 }, { altura: 1.70 });
console.log(resultado27); 



