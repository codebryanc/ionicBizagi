
var mes = undefined; // 40; // undefined

switch(mes){
    case ( 10 > 5 ) ? 40 : 1:   // Funciones autoinvocadas, funciones anonimas.
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case undefined:
        console.log(undefined);
        break;
    default:
        console.log('Sin definir');
        break;
}