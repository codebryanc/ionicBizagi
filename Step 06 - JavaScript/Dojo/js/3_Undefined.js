var color = "Rojo";
var ciudad = null;
var linea = undefined;
var operacion = "Compra";
var vacio = "";

function EvaluandoNullUndefined(){

    if(color != null) {
        console.log("Color es: ", color);

        console.log("El largo de la variable color es: ", color.length);
    }

    if(color == undefined){
        console.log("Color es: ", color);
    }

    // Javascript Hoisting :: Esto hace que color sea undefined; 
    // var color;

    if(ciudad != null) {
        console.log("Ciudad es: ", ciudad);
    }
    else {
        console.log("Ciudad NO existe");
    }

    if(linea != null) {
        console.log("Linea es: ", linea);
    }
    else {
        console.log("Linea NO existe ");
    }

    if(operacion != null) {
        console.log("Operación es: ", operacion);
    }

}

EvaluandoNullUndefined();

// Falsy values javascript

function falsyValues() {   
    "" == null;
    0 == null;
    undefined == null;
}