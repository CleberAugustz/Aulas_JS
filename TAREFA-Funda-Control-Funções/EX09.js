const nota = (nota) => {
    if (nota < 38){
        console.log("REPROVADO!")
    } else if (nota >= 38 && nota < 100) {
        if ((nota % 5) != 0){
        console.log(nota + (5 - (nota % 5)))
        console.log("Aprovado !")
        } else {
            console.log(`Aprovado! ${nota}`)
        }
    } else if (nota == 100) {
        console.log("Passou com Honra")

    } else {
        console.log("Aprovado")
    }
}

nota(46)
nota(56)
nota(50)