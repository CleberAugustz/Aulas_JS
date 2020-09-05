function verificador(vetor){
    let lista = []
    for (i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            lista.push(vetor[i])
        }
    }
    return `A quantidade de elementos que estão entre 10 e 20, são ${lista.length}.`
}

console.log(verificador([1, 5, 15, 3, 50, 11, 20, 19, 18, 35, 15, 15, 13]))