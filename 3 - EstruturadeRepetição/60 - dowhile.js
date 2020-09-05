function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

// no do while, a condição é verificada no final do laço

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção Escolhida foi ${opcao}.`)

} while (opcao != -1)

console.log("Até Bréve.")
