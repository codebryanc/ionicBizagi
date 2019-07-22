// Declarar dos jugadores, la primera letra mayusc para indicar que es una clase
function Jugador(nombre){
    this.nombre = nombre;
    this.pv = 100; // puntos de vida
    this.sp = 100; // Spetial points

    // Metodo para curar otro jugador
    this.Curar = function( jugadorObjetivo ){
        if(this.sp >= 40){
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
            console.info(jugadorObjetivo.nombre, 'Curado');
        }
        else
            console.info(this.nombre, 'No puede curar a:', jugadorObjetivo.nombre);
        
        this.estado(jugadorObjetivo);
    }
    // Metodo para atacar a otro
    this.tirarFlecha = function(jugadorObjetivo){
        if(jugadorObjetivo.pv > 40)
            jugadorObjetivo.pv -= 40;
        else {
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + "Murio")
        }

        this.estado(jugadorObjetivo);
    }
    this.estado = function(jugadorObjetivo){
        console.info(this);
        console.info(jugadorObjetivo);
    }
};

var gandalf = new Jugador('Gandalf');
var legolas = new Jugador('Legolas');

console.log(gandalf);
console.log(legolas);

gandalf.Curar(legolas);

// legolas.tirarFlecha(gandalf);
// legolas.tirarFlecha(gandalf);
// legolas.tirarFlecha(gandalf);