// ¿Para que sirven las expresiones regulares? :: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

    /* Las expresiones regulares son patrones utilizados para encontrar una determinada combinación
       de caracteres dentro de una cadena de texto. 
       
       En JavaScript, las expresiones regulares también son objetos.
       
       Estos patrones se utilizan en los métodos exec y test de RegExp, así como los métodos match, replace, search y split de String.
       
    */

// > Números

    let numerosIonic = '09801231988';
    let numerosIonicCaracter = '09801231988Ab';
    
    function validarNumerosRgx(text, val){
        let resultado = text.match(val);
        console.log(val, ' ::Resultado:: ', resultado);
    }

    // validarNumerosRgx(numerosIonic, /^\d+$/);
    // validarNumerosRgx(numerosIonic, /^[0-9]+$/);   
    // validarNumerosRgx(numerosIonic, /^[0123456789]+$/);
    
    // validarNumerosRgx(numerosIonicCaracter, /^\d+$/);
    // validarNumerosRgx(numerosIonicCaracter, /^[0-9]+$/);   
    // validarNumerosRgx(numerosIonicCaracter, /^[0123456789]$/);
    
// > Letras

    let letrasIonic = 'Alejandro';
    let letrasIonicNumeros = 'Algebra89';

    function validarUnicamenteLetras(text, val){
        let resultado = text.match(val);
        console.log(val, ' ::Resultado:: ', resultado);
    }

    // validarUnicamenteLetras(letrasIonic, /^[A-Z]+$/i);

    // validarUnicamenteLetras(letrasIonicNumeros, /^[A-Z]+$/i);

// Lo basico

    var texto = "hola mundo, 123456789";
    
    var reg1 = RegExp("a");
    var reg2 = /Z/;

    function validarRegex(text, regx){
        var arreglo = text.match(regx);
        console.log(arreglo);
    }

    // validarRegex(texto, reg1);
    // validarRegex(texto, reg2);

    // console.log('/a/ ', texto.match(/a/)); // es lo mismo
    // console.log('/^h/ ', texto.match(/^h/)); // busca en la misma posicion
    // console.log('/.../ ', texto.match(/.../)); // cualquier caracter 
    // console.log('(/^.o/ ', texto.match(/^.o/)); // cualquier caracter en la primera y luego la letra ¨o¨
    // console.log('/[0-9]/ ', texto.match(/[0-9]/)); // que contenga numeros
    // console.log('/^h[aeiou]/ ', texto.match(/^h[aeiou]/));

// General

    let vocal = /[aeiou]/; // Cualquier vocal
    let caracter = /./; // cualquier caracter
    let final = /$/;
    let cualquierSeparacion = /\s/;
    let word = /\w/; //Cualquier palabra sin la eñe
    let soloNumeros = /\d/;
    let gChar = /\g/; // Todas las apariciones    
    let espacio = /\s/;
    let Az09 = /[a-zA-Z0-9]/; // de la A a la Z y de 0 a 9
    let wordW = /\w/; //Cualquier palabra sin la eñe
    var i = "insensible";
    var g = "todas las apariciones";
    var m = "Indicando que sea multilinea";
    var OtroCaracterAlLado = "O+"; // Cuando se coloca el más indica otra O al lado

    // tener cuidado con el ? por que hace match todo

// Para finalizar

    var reg1 = RegExp("a");
    var reg2 = /a/;
    var i = "insensible";
    var g = "Todas las apariciones";
    var m = "multilinea";
    
    var text = "Aeropuerto";
    console.log(text);
    
    // Diptongo (Ae)rop(UE)rto
    var arr = text.match( /[aeiou]{2,2}/ig );
    console.log(arr);
    
    var texto = "La respuesta de la suma es: 45 + 60 = 105";
    
    // ¿Como obtengo únicamente los números?
    
    // Opción A    
    var arreglo = texto.match(/[1234567890]{2,3}/g);
    console.log(arreglo);
    
    // Opción B
    arreglo = texto.match(/[0-9]{2,3}/g);
    console.log(arreglo);
    
    // Opción C
    arreglo = texto.match(/\d{1,}|Respuesta/ig); // | es para un Or la i es para insensitive
    console.log(arreglo);
    
// DEVELOPER MOZILA - Regex 
    