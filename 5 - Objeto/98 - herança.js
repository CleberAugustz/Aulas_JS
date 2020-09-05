const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}


const filha1 = Object.create(pai) // objeto criado com definição de quem é seu prototype, no caso será PAI.
filha1.nome = 'Ana'

console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // nome não foi alterado, porque no momento de declaração do elemento, foi definido que o mesmo é imutavel(writable)

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
// por herança, ela recebeu a cor do cabelo preto.

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){ // irá percorrer todas as chaves do objeto filha2
    filha2.hasOwnProperty(key)? // aqui é criado um if, que caso, aquela chave pertença a ela, irá simplesmente, exibir
    // porém se for de herança, será exibido que veio por herança

        console.log(key) : console.log(`Por Herança: ${key}`)
}