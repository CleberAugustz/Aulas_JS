function media(vetor){
    let soma = 0
    for(i=0; i < vetor.length; i++){
        soma += vetor[i]
    }
    let qtd = vetor.length
    let media = soma/qtd
    return `${media.toFixed(2)}`
    
}

console.log(media([1, 2, 3, 6, 23, 23, 11]))