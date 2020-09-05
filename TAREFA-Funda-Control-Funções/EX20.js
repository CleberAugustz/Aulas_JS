function troco(valor){
    let d100 = 0
    let d50 = 0
    let d10 = 0
    let d5 = 0
    let d1 = 0
    retorno = `São : `
    if(valor < 10){
        d5 = Math.trunc(valor/5)
        d1 = valor%5
    } else if (valor > 10 && valor < 50){
        d10 = Math.trunc(valor/10)
        d5 = Math.trunc((valor%10)/5)
        d1 = ((valor%10)%5)
    } else if (valor >= 50 && valor <= 100){
        d50 = Math.trunc(valor/50)
        d10 = Math.trunc((valor%50)/10)
        d5 = Math.trunc(((valor%50)%10)/5)
        d1 = (((valor%50)%10)%5)
    } else {
        d100 = Math.trunc(valor/100)
        d50 = Math.trunc((valor%100)/50)
        d10 = Math.trunc(((valor%100)%50)/10)
        d5 = Math.trunc((((valor%100)%50)%10)/5)
        d1 = ((((valor%100)%50)%10)%5)
    }

    if (d100 > 0){
        retorno += `${d100} nota(s) de 100. `
    }
    if (d50 > 0){
        retorno += `${d50} nota(s) de 50. `
    }
    if (d10 > 0){
        retorno += `${d10} nota(s) de 10. `
    }
    if (d5 > 0){
        retorno += `${d5} nota(s) de 5. `
    }
    if (d1 > 0){
        retorno += `${d1} nota(s) de 1. `
    }

    return retorno
}

console.log(troco(48))
console.log(troco(36))
console.log(troco(68))
console.log(troco(133))
console.log(troco(255))


