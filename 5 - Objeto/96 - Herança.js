const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V49',
    velMax: 200
}

console.log(ferrari.__proto__) // __proto__ fará com que busque toda a cadeia de herança desse objeto
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // é null por definição


function meuObjeto(){}

console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)