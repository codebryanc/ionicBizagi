
/*
    Primer forma de hacer un IF
 */

var nota = 55;

if(nota >= 90) {
    console.log('A');
}
else if (nota >= 80) {
    console.log('B');
}
else if (nota >= 70) {
    console.log('C');
}
else if (nota >= 60) {
    console.log('D');
}
else{

    if(nota < 50){
        console.log('-F');
    }
    else{
        console.log('+F');
    }

    console.log('Algo por acá...');
}

console.log('Termino el código');

/*
    Segunda forma de hacer un IF
*/

var a = 10;
var b = 20;

var c = 0;

if( a > b) {
    c = a;
} else {
    c = b;
}

console.log('Se puede hacer así', c);

c = (a > b) ? a : b;

console.log('Operador ternario', c);

/*
    Tercera manera de hacerlo
*/

c = ( a > b ) ? function (){
    console.log('A es mayor que B');
    return a;
}() : function (){
    console.log('B es mayor que A');
    return b;
}();

console.log(c);
console.log("=========================");

/*
    Última en versión corta
*/

var d = 10;
var e = 30;

var f = d || e;

console.log(f);

function getNombre (nombre){
    var nomb = nombre || null || "<sin nombre>"; // Podemos evaluar 3 o mas veces, hasta que exista un valor valido;
    
    var apellido = null || null || undefined;  // undefined es el último que evalua

    console.log(nomb);
    
    console.log(apellido);
}

getNombre();

