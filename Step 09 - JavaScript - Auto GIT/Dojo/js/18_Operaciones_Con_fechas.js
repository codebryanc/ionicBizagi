var fecha = new Date(2018, 9, 20);

console.log(fecha);

fecha.setDate(32);

console.log(fecha);

// Podemos hacer una modificación al prototipo

Date.prototype.sumarDias = function(dias){
    this.setDate(this.getDate() + dias);
    return this;
}
Date.prototype.sumarAnios = function(anios){
    this.setFullYear(this.getFullYear() + anios);
    return this;
}

console.log('Con prototype');
console.log(fecha);
console.log(fecha.sumarDias(4));
console.log(fecha.sumarAnios(-18));