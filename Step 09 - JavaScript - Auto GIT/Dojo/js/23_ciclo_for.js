
// FOR -- console.log();

for (let i = 0; i < 10; i++) {

    if(i === 3)
        continue; // Saltar el número actual.

    if(i === 5)
        break; // termina el ciclo.

    console.log(i);
}
console.log("==============");

// FOR IN

var persona = function(){
    this.persona = "Bryan",
    this.apellido = "Cubillos",
    this.edad = 27
};

persona.prototype.direccion = "Bogota";

var bryan = new persona();

for(propiedad in bryan) {
    
    if(bryan.hasOwnProperty(propiedad) === false)
        continue;

    console.log(bryan.hasOwnProperty(propiedad));

    console.log(propiedad, ":", bryan[propiedad]);
}
console.log("==============");

// Reflection, es la habilidad que tienen los objetos de conocerse a si mismos

for( num in [1,2,3,4,5,6,7,9,10]){
    console.log(num); // num es el index
}
console.log("==============");

    // Si se requiere el valor de los arreglos mejor usar foreach comparado con for in

[1,2,3,4,5,6,7,9,10, true, false, "String"].forEach(function(val){
    console.log(val);
})