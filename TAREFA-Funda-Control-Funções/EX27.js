function crescimento (altura1,taxa1, altura2, taxa2){
    if(altura1 < altura2){
        if(taxa1 < taxa2){
            return `A primeira criança nunca será maior que a segunda`
        } else {
            return `A primeira criança será maior que a primeira em ${qtdAnos(altura1, taxa1, altura2, taxa2)} anos.`
        }
    }
    if(altura2 < altura1){
        if(taxa2 < taxa1){
            return `A segunda criança nunca será maior que a primeira.`
        } else {
            return `A segunda criança será maior que a primeira em ${qtdAnos(altura2, taxa2, altura1, taxa1)} anos.`
        }
    }
}
function qtdAnos(altura1,tx1, altura2, tx2){
    qtdano = 0
    while (altura1 < altura2){
        altura1 += tx1
        altura2 += tx2
        qtdano++    
    }
    return `${qtdano}`
}
console.log(crescimento(1.70, 0.20, 1.65, 0.35))
console.log(crescimento(1.00, 0.10, 1.80, 0.02))