function pedido(qtd = 1, produto){
    switch(produto){
        case 100:
            return `Você pediu ${qtd} Cachorro quente, e o total é R$${(qtd*3.00).toFixed(2)}.`
        case 200:
            return `Você pediu ${qtd} Hambúrguer Simples, e o total é R$${(qtd*4.00).toFixed(2)}.`
        case 300:
            return `Você pediu ${qtd} Cheeseburguer, e o total é R$${(qtd*5.50).toFixed(2)}.`
        case 400:
            return `Você pediu ${qtd} Bauru, e o total é R$${(qtd*7.50).toFixed(2)}.`
        case 500:
            return `Você pediu ${qtd} Refrigerante, e o total é R$${(qtd*3.50).toFixed(2)}.`
        case 600:
            return `Você pediu ${qtd} Suco, e o total é R$${(qtd*2.80).toFixed(2)}.`
        default:
            return "Não temos esse produto aqui"
    }
}

console.log(pedido(10, 200))
console.log(pedido(5, 500))
console.log(pedido(10, 300))