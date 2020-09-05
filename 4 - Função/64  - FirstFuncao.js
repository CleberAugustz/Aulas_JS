// Função em JS é First Class Object (Citizens)
// higher-order function

function fun() {

}

// armazenar em uma variável
const func2 = function () {

}

// Armazener em um Array

const array = [function (a,b){ return a +b}, fun, func2]

console.log(array[0](2,3))

// Armazenar em um atributo de objeto

const obj = {}

obj.falar = function (){ return 'Opa'}
console.log(obj.falar())

// Passar uma função como parametro
function run(fun){
    fun()
}

run(function () { console.log('Executando....')})

// Uma função pode retornar/conter uma função

function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4) // o segundo parentese , comtém o valor da segunda função, que no caso eh uma função anonima.
// o exemplo abaixo tem o mesmo resultado.
const cincoMais = soma(2,3)
cincoMais(4)