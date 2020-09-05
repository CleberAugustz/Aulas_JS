function criarProduto(nome, preco){ // desconto poderia estar aqui e ser declarado como parâmetro e receber um valor padrão como abaixo.
    return {
        /*
        nome: nome,
        preco: preco,
        desconto: 25*/
        // tem o nmesmo resultado do de cima.
        nome,
        preco,
        desconto: 25 // por padrão é 25, entretanto, pode ser alterado caso queira.
    }
}

const cadeira = criarProduto('CadeiradeCasa',45)
console.log(cadeira)
// possívell os dois modelos, pois um eu estou atribuindo à uma variável que poderá ser chamado mais a adiante no código.
console.log(criarProduto('Notebook', 2500))