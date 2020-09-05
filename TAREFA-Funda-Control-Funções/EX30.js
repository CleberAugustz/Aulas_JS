function maiorMenor(lista){
    let maior
    let menor
    for(i = 0; i < lista.length; i++){
        if(maior === undefined && menor === undefined){
            maior = lista[i]
            menor = lista[i]
        } else {
                if(lista[i] > maior){
                    maior = lista[i]
                }
                if(lista[i] < menor){
                    menor = lista[i]
            }
        }
    }
    return `O maior item da lista é ${maior} e o menor é ${menor}`
}

console.log(maiorMenor([10, 15, 2, 20, 22, 45, 75, 33, 3, 1, 14, 55]))