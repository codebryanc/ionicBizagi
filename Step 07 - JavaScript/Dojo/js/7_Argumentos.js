
var arguments = 10; // Este lo ignora, al estar en el prototipo de la función

function myFuction(a, b, c, d){ // Estos argumentos no hacen referencia a arguments
    console.log(arguments);
    console.log(a,b,c,d);

    if(arguments.length !== 4){
        console.error('La función necesita 4 argumentos')
        return;
    }

    // ¿Que pasa cuando sumamos un numero a un undefined?

    // console.log(a + undefined);
}

myFuction(10, 40, {}, function(){}); //  Este argumento es lo que realmente es enviado a la función

//myFuction(10, 40, {}, function(){}, 9); // Error