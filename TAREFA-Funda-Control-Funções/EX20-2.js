function saque(valorSaque){
    let d100 = 0
    let d50 = 0
    let d10 = 0
    let d5 = 0
    let d1 = 0
    let valorNota = selecaoDeNota(valorSaque)
    let retorno = `São : `
    while (valorSaque >= valorNota){
        switch(valorNota){
            case 100:
                d100++
                valorSaque -= 100
                break
            case 50:
                d50++
                valorSaque -= 50
                break
            case 10:
                d10++
                valor -= 10
                break
            case 5:
                d5++
                valorSaque -= 5
                break
            case 1:
                d1++
                valorSaque -= 1
                break
        }
        valorNota = selecaoDeNota(valorSaque)
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

const selecaoDeNota = (valorSaque) => {
    if (valorSaque >= 100){
        return 100
    }
    if (valorSaque >= 50){
        return 50
    }
    if (valorSaque >= 10){
        return 10
    }
    if (valorSaque >= 5){
        return 5
    }
    if (valorSaque >= 1){
        return 1
    }
}

console.log(saque(155))