function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco())
global.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

const carro = {
    preco: 49990, desc: 0.20
}

console.log(getPreco.call(carro)) //
console.log(getPreco.apply(carro))


console.log(getPreco.call(carro, 0.17, '$')) // no call é possível passar os parâmetros para o a função, no caso a função getPreco
console.log(getPreco.apply(carro, [0.17, "$"])) // a ideia é quase a mesma no apply, porém se passa um array como parâmetro.
// nos parâmetros é necessário passar o contexto, e o seguintes parâmetros.
// obs: quem recebe os parâmetros é o GETPRECO, e não o carro. o carro apenas passa algumas informações.