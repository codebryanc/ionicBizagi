var b = "Cubillos";
var a = new String("BryanC y");

console.log(a);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i  = a.indexOf("y");

console.log("La letra 'y' está en la posición: ", i);

i = a.lastIndexOf("y");

console.log("La letra 'y' está en la posición: ", i);

// tambien funciona con caracteres, no unicamente con letras.

var c = "Bryan Alejandro Cubillos Prieto";
console.log('la cadena es la siguiente desde 0 hasta el caracter : ', c.substring(0, c.indexOf(' ')));

// Hacemos un split sin ningun caracter
var split = c.split();
console.log(split);

// Hacemos un split por espacio
split = c.split(" ");
console.log(split);

console.log('Tamaño', split.length);
