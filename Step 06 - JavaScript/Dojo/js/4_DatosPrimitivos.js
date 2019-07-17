var numerico = 10;
var texto = "cadena";
var Boolean = true;
var indefinido = undefined;
var nulleable = null; 

// Tienen escritura dinamica, las variables no están atadas a un tipo

var objeto = {
    numero: 10,
    texto: "BryanC",
    objHijo: {
        propiedadNumerica: 10
    }
}

var person = {
    isHuman: true,
    hijo: {
        nombre: "Juan",
        edad: 12
    }
};

var resultadoObjeto = Object.create(person);

var nuevoObj = objeto;

// Cuando usamos el operador NEW el comportamiento es diferente