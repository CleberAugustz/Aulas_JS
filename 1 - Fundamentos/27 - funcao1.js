// funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // 
imprimirSoma(2) // retornar uma Nan, poois segundo parâmetro é undefined, por não foi definido nenhuma valor
imprimirSoma(2, 3, 5, 6, 7, 8, 10) // ele ignra o restante, usa apenas os dois primeiros
imprimirSoma() // NaN, por não foi definido nenhuma valor


// funcao com reotnro // nesse formato, quando for chamada, a função retornará o que estiver dentro de RETURN 
function soma(a, b = 0) { // por padrão o B será 0. Excluindo a necessidade de passar o segundo parâmetro no momento que estamos chamando a função
    return a + b // soma, irá atribuir isso a ela quando terminar de a execução da função e assim poderá exibir o resultado.
}

console.log(soma(2,3))
console.log(soma(2))  // dessa forma funcionará pois o segundo parâmetro é 0 por padrão.
console.log(soma()) // o primeiro padrão nao foi declarado como padrão e retornará um NaN.


