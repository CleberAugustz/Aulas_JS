let valor // não inicializada


valor = null //  ausência de valor
console.log(valor)
//console.log(valor.toString()) // Haverá um erro! atenção com esses tipos de ação.

const produto = {}
console.log(produto.preco) // por padrão, você pode acessar um atributo de um objeto, quando o mesmo já estiver declarado, entretanto
//você não conseguirá acessar um atributo que esteja dentro de outro atributo EX:
// console.log(produto.preco.valor)  Retornará um erro, pois o preco não foi declarado ainda e dessa forma, você não pode acessar o atributo VALOR
// diferente de acessar preco, através do objeto produto, que já foi declarado.


console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined

console.log(!!produto.preco) // cria uma validação para BOOLEANA
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço ou vazio
console.log(!!produto.preco)
console.log(produto)