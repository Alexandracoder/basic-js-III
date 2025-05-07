
// Escribe una función que tome dos números como argumentos y devuelva su suma.
//escribe tu código aquí
// Matemáticas

function suma(a, b) {
return a + b;
}
let resultado0 = suma(2, 2);
console.log(resultado0);

function resta(a, b) {
return a - b;
}
let resultado1 = resta(5, 3);
console.log(resultado1);

function producto(a, b) {
  return a * b;
}
let resultado2 = producto(4, 3);
console.log(resultado2);

function division(a, b) {
return a / b;
}
let resultado3 = division(8, 2);
console.log(resultado3);

function potencia(base, exponente) {
return Math.pow(base, exponente);
}
let resultado4 = potencia(6, 2);
console.log(resultado4);

function resto(a, b) {
return a % b;
}
let resultado5 = resto(10, 3);
console.log(resultado5);

function raizCuadrada(a) {
return Math.sqrt(a);
}
let resultado6 = raizCuadrada(16);
console.log(resultado6);

function valorAbsoluto(a) {
return Math.abs(a);
}
let resultado7 = valorAbsoluto(-5);
console.log(resultado7);

function redondear(a) {
return Math.round(a);
}
let resultado8 = redondear(4.7);
console.log(resultado8);

function numeroAleatorio() {
return Math.random();
}
let resultado9 = numeroAleatorio();
console.log(resultado9);

// Letras

function concatenar(cadena1, cadena2) {
return cadena1 + cadena2;
}
let resultado10 = concatenar("Hi", " coders!");
console.log(resultado10);

function longitud(cadena) {
return cadena.length;
}
let resultado11 = longitud("Hola, mundo!");
console.log(resultado11);

function toUpperCase(cadena) {
return cadena.toUpperCase();
}
let resultado12 = toUpperCase("hija de dios!");
console.log(resultado12);

function toLowerCase(cadena) {
return cadena.toLowerCase();
}
let resultado13 = toLowerCase("HIJA DE DIOS!");
console.log(resultado13);

function getCaracter(cadena, indice) {
return cadena.charAt(indice);
}
let resultado14 = getCaracter("Hija de Dios!", 4);
console.log(resultado14);

function invertirCadena(cadena) {
return cadena.split("").reverse().join("");
}
let resultado15 = invertirCadena("Hija de Dios!");
console.log(resultado15);

function contarCaracter(cadena, caracter) {
return cadena.split(caracter).length - 1;
}
let resultado16 = contarCaracter("Hija de Dios!", "a");
console.log(resultado16);

function eliminarEspacios(cadena) {
return cadena.replace(/\s+/g, "");
}
let resultado17 = eliminarEspacios("Hija de Dios!");
console.log(resultado17);

function esPalindromo(cadena) {
return cadena === cadena.split("").reverse().join("");
}
let resultado18 = esPalindromo("oso");
console.log(resultado18);

function capitalizarPalabras(cadena) {
return cadena
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(" ");
}
let resultado19 = capitalizarPalabras("hija de dios!");
console.log(resultado19);

// Arrays

function sumaArray(array) {
return array.reduce((acum, num) => acum + num, 0);
}
let resultado20 = sumaArray([1, 2, 3, 4]);
console.log(resultado20);

function promedioArray(array) {
return array.reduce((a, n) => a + n, 0) / array.length;
}
let resultado21 = promedioArray([1, 2, 3, 4]);
console.log(resultado21);

function ordenarArrayAscendente(array) {
return array.sort((a, b) => a - b);
}
let resultado22 = ordenarArrayAscendente([4, 2, 3, 1]);
console.log(resultado22);

function filtrarMayores(array, numero) {
return array.filter(e => e > numero);
}
let resultado23 = filtrarMayores([1, 2, 3, 4], 2);
console.log(resultado23);

function concatenarArrays(array1, array2) {
return array1.concat(array2);
}
let resultado24 = concatenarArrays([1, 2, 3], [4, 5, 6]);
console.log(resultado24);

function maximoArray(array) {
return Math.max(...array);
}
let resultado25 = maximoArray([1, 2, 3, 4]);
console.log(resultado25);

function minimoArray(array) {
return Math.min(...array);
}
let resultado26 = minimoArray([1, 2, 3, 4]);
console.log(resultado26);

function contarElemento(array, elemento) {
return array.filter(e => e === elemento).length;
}
let resultado27 = contarElemento([1, 2, 3, 1, 4], 1);
console.log(resultado27);

function eliminarDuplicados(array) {
return [...new Set(array)];
}
let resultado28 = eliminarDuplicados([1, 2, 3, 1, 4]);
console.log(resultado28);

function invertirArray(array) {
return array.reverse();
}
let resultado29 = invertirArray([1, 2, 3, 4]);
console.log(resultado29);

// Objetos

function obtenerNombre(objeto) {
return objeto.nombre;
}
let resultado30 = obtenerNombre({ nombre: "Soraya", edad: 10 });
console.log(resultado30);

function actualizarEdad(objeto, nuevaEdad) {
objeto.edad = nuevaEdad;
return objeto;
}
let resultado31 = actualizarEdad({ nombre: "Soraya", edad: 10 }, 11);
console.log(resultado31);

function agregarPropiedad(objeto, propiedad) {
objeto[propiedad] = null;
return objeto;
}
let resultado32 = agregarPropiedad({ nombre: "Soraya", edad: 10 }, "altura");
console.log(resultado32);

function eliminarPropiedad(objeto, propiedad) {
delete objeto[propiedad];
return objeto;
}
let resultado33 = eliminarPropiedad({ nombre: "Soraya", edad: 10 }, "edad");
console.log(resultado33);

function contarPropiedades(objeto) {
return Object.keys(objeto).length;
}
let resultado34 = contarPropiedades({ nombre: "Soraya", edad: 10 });
console.log(resultado34);

function tienePropiedad(objeto, propiedad) {
return objeto.hasOwnProperty(propiedad);
}
let resultado35 = tienePropiedad({ nombre: "Soraya", edad: 10 }, "nombre");
console.log(resultado35);

function obtenerValores(objeto) {
return Object.values(objeto);
}
let resultado36 = obtenerValores({ nombre: "Soraya", edad: 10 });
console.log(resultado36);

function sonIguales(objeto1, objeto2) {
return JSON.stringify(objeto1) === JSON.stringify(objeto2);
}
let resultado37 = sonIguales({ nombre: "Soraya", edad: 10 }, { nombre: "Soraya", edad: 10 });
console.log(resultado37);

function copiarObjeto(objeto) {
return { ...objeto };
}
let resultado38 = copiarObjeto({ nombre: "Soraya", edad: 10 });
console.log(resultado38);

function combinarObjetos(objeto1, objeto2) {
return { ...objeto1, ...objeto2 };
}
let resultado39 = combinarObjetos({ nombre: "Soraya", edad: 10 }, { altura: 1.70 });
console.log(resultado39);
