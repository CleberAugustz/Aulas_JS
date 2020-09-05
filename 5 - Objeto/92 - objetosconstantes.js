/// pessoa -> 123 -> {...}

const pessoa = {nome: "Joao"}
pessoa.nome = 'Pedro'

// não é permitido altera o objeto, entretanto pode se adicionar novos atributos, pois o endereço que está alocado o objeto nãos e altera.

console.log(pessoa)

// abaixo ocorre um erro, pois não é permitido atribuir um novo objeto para pessoa, pois a variavel pessoa eh uma CONSTANTE
// e quando é CONSTANTE, não é permitido atribuir um novo endereço de espaço na memoria.
// pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // Não permite qualquer alteração.. Diferente na situação acima, o objeto passa a ser constante e não é permitido fazer qualquer alteração.

pessoa.nome = 'Maria'
pessoa.end = 'Rua Abc'

console.log(pessoa.nome)
console.log(pessoa)

// exemplo de um variavel constante , que recebe como atribuição um objeto constante.
const  pessoaConstate = Object.freeze({nome: "Cleber"})
pessoaConstate.nome = "Maria" // não faz a alteração porque o objeto é constante.
console.log(pessoaConstate)
