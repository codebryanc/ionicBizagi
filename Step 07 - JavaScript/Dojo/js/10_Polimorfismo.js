
function determinaDato(a){
    if(a === undefined){
        console.log('No se que hacer con undefined');
    }

    if(typeof a === 'number'){
        console.log('Es numerico');
    }

    if(typeof a === 'string'){
        console.log('a es un texto');
    }

    if(typeof a === 'object'){
        console.log('a es un objeto');

        if(a instanceof Number){
            console.log("A es un objeto númerico");
        }
    }
}

determinaDato();
determinaDato(1);
determinaDato({id:1});

var nnum = new Number(3); // Esto es un objeto, no es un valor primitivo númerico.
determinaDato(nnum);

/*

    En programación orientada a objetos, el polimorfismo se refiere a la propiedad por la que es
    posible enviar mensajes sintácticamente iguales a objetos de tipos distintos.
    
    El único requisito que deben cumplir los objetos que se utilizan de manera polimórfica
    es saber responder al mensaje que se les envía.

*/