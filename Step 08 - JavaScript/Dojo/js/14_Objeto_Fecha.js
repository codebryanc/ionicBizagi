    var hoy = new Date();
    var fMili = new Date(1); // Representación númerica de una fecha : (fMili = fecha en milisegundos)

    //var fechaFija = new Date(anio, mes, dia, hora, min, seg, mili);
    var fechaFija = new Date(2016, 10, 20);

    // Los meses empiezan en 0
    // Las horas son en 00:00 a 23:59 cuando sea 24 suma un día 

// Primer console

    // console.log('Hoy', hoy);
    // console.log('fMili', fMili);

    // Propiedades y metodos

    // .getYear() NO SE DEBE USAR, Deprecated

    hoy.getTime(); // Valor representado en milisegundos de una fecha

// segundo console

    var fecha = new Date(2016, 9, 20);
    // console.log('fecha 2016', fecha);

// tercer console

    // console.log('fecha actual : ', fecha);
    
    //fecha = fecha + 5; // No funcionó LO deja al final como un text, cambia el tipo a string
    // console.log('fecha + 5', fecha);

    // como debemos hacerlo
    fecha.setDate(25);
    // console.log('fecha setdate 25', fecha);

    fecha.setDate(32); // Suma el mes y cambia de día
    // console.log('fecha setdate 32', fecha);

    Date.prototype.sumarDias = function(dias){
        this.setDate(this.getDate() + dias);
        return this;
    }

// Cuarto console

    console.log('Fecha actual', fecha);
    console.log('Fecha sumarDias 5', fecha.sumarDias(5));
    console.log('Fecha sumarDias -2', fecha.sumarDias(-2));