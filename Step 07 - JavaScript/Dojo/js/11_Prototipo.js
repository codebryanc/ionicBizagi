function Persona(){
    this.nombre = "Fernando";
    this.edad = 30;
    this.apellido = "Herrera";
}

var per = new Persona();

Persona.prototype.imprimirInfo = function() {
    console.log(this.nombre + " " + this.apellido + "("+ this.edad +")");
}


Persona.prototype.pais = "Colombia"; //Cualquier cosa

console.log(per);

/*

    El objetivo es hacer mas eficiente el uso de los objetos.
    Cuando se define la data, no se repite.
    
    Nos ayuda a manejar los objetos.

*/

var a = 1;

Number.prototype.esPositivo = function(){
    if(this > 0)
        return true;
    else 
        return false;
}