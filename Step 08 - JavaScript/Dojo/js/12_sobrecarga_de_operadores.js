function Producto(){
    this.nombre = '';
    this.precio = '';
}

function CrearProducto(a, b){
    console.log(1, ' Operador');
}

function CrearProducto(a){
    console.log(2, ' Operador');
}

function CrearProducto(nombre, precio){
    console.log(3, ' Operador'); // Última cargada
    
    var productoNuevo = new Producto();

    productoNuevo.nombre = nombre || 'Sin nombre';
    productoNuevo.precio = precio || 0;
    
    console.log('Nuestro producto:', productoNuevo);
}

function CrearProductoPrecio100(nombre){
    return CrearProducto(nombre, 100);
}

// En este caso toma la última funcion encontrada en el contexto
CrearProducto('lapiz');

CrearProductoPrecio100('Corrector');