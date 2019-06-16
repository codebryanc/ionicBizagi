var color = "Rojo";
var ciudad = null;
var linea = undefined;
var operacion = "Compra";

function EvaluandoNullUndefined(){

    if(color != null) {
        console.log("Color es: ", color);

        console.log("El largo de la variable color es: ", color.length);
    }

    if(ciudad != null) {
        console.log("Ciudad es: ", color);
    }
    else {
        console.log("Ciudad NO existe");
    }

    if(linea != null) {
        console.log("Linea es: ", color);
    }
    else {
        console.log("Linea NO existe ");
    }

    if(operacion != null) {
        console.log("Operación es: ", color);
    }

}

EvaluandoNullUndefined();