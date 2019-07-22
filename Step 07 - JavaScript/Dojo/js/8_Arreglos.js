
var arr = [5,4,3,2,1];

console.log(arr);

// Los arreglos son con base a cero

console.log(arr[0], arr[4], arr[5]); // No hay error en desbordamiento de arreglo 

// o algún error, la posición es undefined y eso es todo! 

arr = arr.reverse(); // Invierte

console.log(arr);


// Join convierte todos los elementos y genera una cadena separada por coma o por pipe , |

arr = arr.join('|');
console.log(arr);

//arr = [5,4,3,2,1]; // Se vuelve a definir por que ahora es una cadena de texto

// arr = arr.join('|');
// console.log(arr);

arr = arr.split("|");
console.log(arr);

arr.push('6');
console.log(arr);

arr.unshift("0");
console.log(arr);

console.log(arr.toString());

// El toString es mas rapido que el Split

// Eliminar el último elemento del arreglo
// la función pop nos devuelve cual elimino

var elimino = arr.pop();

console.log(arr);
console.log(elimino);