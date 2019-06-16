var a = 1; //Esto hace que se reserve el espacio en memoria para la variable.

console.log(a + a);

function imprimir(){
    for(var i = 0; i < 8000; i++){
        console.log("imprimo");
    }
}

function presionoClick(){
    console.log("presiono clic en botón");
}

imprimir();

//var nombre = "Juan";

var nombre;