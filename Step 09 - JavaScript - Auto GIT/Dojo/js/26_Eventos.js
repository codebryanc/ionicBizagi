function presionoClick(arg){
    console.log('Acción del botón, click');
    console.log(arg);
}

function presionoDosClick(){
    console.log('Acción del botón, doble click');
}

function eventBlur(){
    console.log('Acción del botón, blur');
}

var inputHtml = document.getElementById("cajaTexto");

console.log(inputHtml);

inputHtml.addEventListener("blur", eventBlur);


//** IMPORTANTE ** :: Ademas ver el PDF