let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Cleber', 'Maria', 'José', 'Isabela']
let vetorDouble = [10.5, 19.3, 1.4, 14.5]

console.log(vetorInteiro.concat(vetorString))
console.log(vetorDouble.concat(vetorString))


function concatenar(...args){
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }

    return resultado
}
console.log('==================')
console.log(concatenar(vetorInteiro, vetorString))
console.log(concatenar(vetorDouble, vetorString))