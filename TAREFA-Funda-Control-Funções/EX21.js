function convenio(idade){
    if(idade < 10){
        return 100+80
    }
    if(idade >= 10 && idade <= 30){
        return 100+80
    }
    if(idade > 30 && idade <= 60){
        return 100+95
    }
    if(idade > 60){
        return 100+130
    }
}

console.log(`Você irá pagar R$${convenio(23)}`)
console.log(`Você irá pagar R$${convenio(14)}`)
console.log(`Você irá pagar R$${convenio(43)}`)
console.log(`Você irá pagar R$${convenio(40)}`)