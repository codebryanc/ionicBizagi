// Esto es un comentario de linea simple

/*
    Esto es un comentario multilinea
    Puede tener varias en los headers
*/

// Los enter y tabulaciónes son literalmente ignorados por JS

var arr = ["Bryan", 
            {
                // La primera posición del arreglo sirve para ...
                // hace ...
                nombre: "Bryan",
                
                
                // la segunda  ...
                // Es un objeto ...
                // Hace ....
                apellido: "Cubillos",
                getnombre: function()
                {
                    return this.Nombre + " " + this.Apellido;
                }
            },
            // Tercera posición del arreglo
            true,
            // Funcion de la cuarta posición ...
            function(){
                // Instrumentación del objeto
                console.log(this);
            }

            // Fin del arreglo principal
            // no hacer nada despues

            
        ];

console.log(arr);