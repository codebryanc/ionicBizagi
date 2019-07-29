// 1 letra May
function Jugador(nombre){
    this.nombre = nombre;
    this.puntoVida = 100;
    this.PuntoEspecial = 100;

    this.estado = function(jugadorDestino){
        console.log(this);
        console.log(jugadorDestino);
    }

    // Metodo Atacar
    this.tirarFlecha = function(jugadorDestino){
        if(jugadorDestino.puntoVida > 40){
            jugadorDestino.puntoVida -= 40;
        }
        else {
            jugadorDestino.puntoVida = 0;
            console.error(jugadorDestino.nombre + " Murio");
        }

        this.estado(jugadorDestino);
    }

    // Metodo Curar
    this.curar = function(jugadorDestino){
        if(this.PuntoEspecial >= 40){
            this.PuntoEspecial -= 40;
            jugadorDestino.puntoVida += 20;
            console.info(jugadorDestino.nombre + " Curado (Puntos de vida:" + jugadorDestino.puntoVida+ ")")
        }

        this.estado(jugadorDestino);
    }
}

// Jugar

    var gandalf = new  Jugador('Gandalf');
    var legolas = new  Jugador('Legolas');

// Estado 

// gandalf.estado();
// legolas.estado();

// gandalf.estado(legolas);

// Atacar

    gandalf.tirarFlecha(legolas);

// Curar

    legolas.curar(gandalf);