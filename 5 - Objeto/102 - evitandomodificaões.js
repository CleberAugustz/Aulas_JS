// criar restrições para melhorar o compreendimento das coisas.

// Object.preventExtensions
// evita que o objeto seja extendido. impossibilita que esse objeto receba novos atributos.


const produto = Object.preventExtensions({
    nome: 'Qaulquer', preco: 1.99, tag: 'Promoção'
})


console.log('Extensilve', Object.isExtensible(produto)) // testa se esse objeto foi criado com extension ou não

produto.nome = 'borracha'
produto.descricao = 'bprracha escolar branca'
delete produto.tag
console.log(produto)


// Object.seal
// objetos criados ou que tem essa definição, só permitem modificar o que existe, e não pérmite que exclua ou adicione
const pessoa = { nome: 'Juliana', idade: 35}

Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenoome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

// Object.free = selado + valores constantes
// tudo travado, não permiti fazer nada em objetos com essa definição.
