function negativos(vetor){
    let qtdNegativos = 0
    for(i = 0; i < vetor.length ; i++){
        if(vetor[i] < 0){
            qtdNegativos++
        }
    }
    return qtdNegativos
}

console.log(negativos([1, -2, 3, 4, -5, 10, 2, -22]))