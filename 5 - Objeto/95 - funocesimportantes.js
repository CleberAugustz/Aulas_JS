// 

const pessoa = {
    nome: 'Rebeca',
    idade : 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // irá pegar todos os key de do objeto, no caso, nome; idade; peso.
console.log(Object.values(pessoa)) // irá pegar apenas o valores de cada elemento de dentro do objeto.
console.log(Object.entries(pessoa)) // irá exibir em array, todos os elementos do objeto, sendo cada array, para cada elemento
// ['NOME', 'Rebeca']


Object.entries(pessoa).forEach(([chave, valor]) => { // irá percorrer todos os elementos no formato entries, que será varios arrays, com
    // chave e valor.
    console.log(`${chave}: ${valor}`) // necessariamente os nome CHAVE e VALOR, poderiam ser A e B, pois ali apenas eles apenas
    // eles irá receber os dados pela posição e não pelo nome a eles dado.    
}); 
// demonstrando o que foi dito acima
console.log("Mesmo formato do de cima.")
Object.entries(pessoa).forEach(([c, v]) => {
    console.log(`${c}: ${v}`)
});



Object.defineProperty(pessoa, 'dataNascimento',{ // através desse metodo, você defini as propriedades do elemento do objeto.
    enumerable: true, // enumerable  e writables, são algumas propriedades que só podem ser modificadas usando o metodo(função) defineProperty
    writable: false,
    value: '01/01/2019'
})


pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)



// Object.assign (ECMASCript2015)

const dest = {a:1}
const o1 = { b:2 }
const o2 = { c:3, a:4}
const obj = Object.assign(dest, o1, o2) // coloca todos os objetos dentro do primeiro. nesse caso o1, o2, serão  inseridos dentro do DEST. todos os seus elementos.

Object.freeze(obj)
obj.c = 1234
console.log(obj)