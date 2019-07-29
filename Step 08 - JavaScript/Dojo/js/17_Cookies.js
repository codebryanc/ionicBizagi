// Cookies :: Nos ayudan a salvar información en la maquina del cliente
// No son sensibles para el funcionamiento de la pagina (Nada que comprometa el sitio web)
// no hay manera de que el desarrollador controle dichas cookies (el manejo del cliente con ellas)

// Primer paso
// document.cookie = "nombre=Bryan";
// document.cookie = "apellido=Cubillos";

var demo = "123;123*123'123/ 1";

console.log('texto original', demo);
console.log('escape', escape(demo));
console.log('unescape, escape', unescape(escape(demo)));

// Escapar es cambiar caracteres que pueden generar errores, por caracteres permitidos

function crearCookie(nombre, valor){
    // escape
    valor = escape(valor);

    // expires
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() + 1);

    // new cookie
    document.cookie = nombre + '=' + valor + ';' + "; expires=" + hoy.toUTCString() + ";";
}

function borrarCookie(nombre){
    // expire
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth() - 1);

    // delete
    document.cookie = nombre + "="+ null +"; expires=" + hoy.toUTCString() + ";";
}

function obtenerCookie(nombre){
    
    // return cookie value
    var valorCookie = undefined;

    let cookies = document.cookie;
    var cookieArr = cookies.split(';'); // Nuestra convención para dividir (llave:valor); cookie; cookie;

    // cookieArr.forEach(cookie => {
    //     let nombreValor = cookie.split("=");
    //     if(nombreValor.length > 1 && valorCookie === undefined){
    //         if(nombreValor[0] === nombre){
    //             // return unescape(nombreValor[1]); // Siempre devuelve undefined
    //             valorCookie =  unescape(nombreValor[1]); // Devuelve el valor correcto
    //             return false; // A pesar del return continua la ejecucion de forEach
    //         }
    //     }
    // });

    cookieArr.every(cookie => {
        let nombreValor = cookie.split("=");
        if(nombreValor.length > 1 && valorCookie === undefined){
            if(nombreValor[0] === nombre){
                // return unescape(nombreValor[1]); // Siempre devuelve undefined
                valorCookie =  unescape(nombreValor[1]); // Devuelve el valor correcto
                return false; // Termina el ciclo every !!! Este si funciona con relacion a forEach
            }
        }
    });

    return valorCookie;
}

crearCookie('name', 'Bryan');
 crearCookie('correo', 'Bryan@hotmail.com');
 crearCookie('direccion', 'San José, Costa Rica');

 borrarCookie('nombre');

console.log("Cookie name: ", obtenerCookie("name"));
 console.log("Cookie correo es: ", obtenerCookie("correo"));
 console.log("Cookie direccion es: ", obtenerCookie("direccion"));

// borrarCookie('nombre');

console.log("Cookie nombre es segunda linea: ", obtenerCookie("nombre"));

var cookies = document.cookie;
console.log('Cookies :', cookies);