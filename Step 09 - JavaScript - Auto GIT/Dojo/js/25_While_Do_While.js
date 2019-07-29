
/*
    While

*/

var i = 0;

while( i <= 10 ){

    i++;

    if(i === 5)
        continue; // Sigue el While pero este item se interrumpe aquí

    if(i === 6)
        break; // para salir;

    console.log(i);
}

console.log('=============================');

/*
    Do While
*/

var y =  0;

do{
    y++;

    if(y === 4)
        continue;

    console.log(y);
}
while(y<10);