function imprimir(nombre, apellido){

    apellido = apellido || "xxx";

    // if(apellido === undefined){
    //     apellido = "xxx";
    // }

    console.log(nombre, " ", apellido);
}

imprimir("Bryan", null);

imprimir("Alejandro", undefined);

imprimir("Bryan", "Cubillos");

imprimir("Bryan", NaN);

// Enviar objetos primitivos
// Enviar objetos
// Enviar Funciones

function imprimirFuncion(fn){
    fn();
}

var persona = {
    nombre: "Bryan Alejandro",
    apellido: "Cubillos Prieto"
}

imprimirFuncion(function fnInicial(){ console.log("Funcion anonima") })

var miFn = function fnSecundaria(){ console.log("Funcion anonima 2") }

imprimirFuncion(miFn);