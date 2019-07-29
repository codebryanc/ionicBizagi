// La palabra reservada new();

function Persona() {
    this.nombre = 'Andrea';
    this.apellido = 'Cortez';
    this.edad = 30;
    this.nombreCompleto = function() {
        return (this.nombre + " " + this.apellido);
    }
}

var mujer = new Persona();

var hombre = new Persona();

console.log(mujer);
console.log(mujer.nombre);
console.log(mujer.nombreCompleto());
