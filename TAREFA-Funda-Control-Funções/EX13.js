const diasSemana = (dia) => {
    switch (dia){
        case 1:
            console.log("Segunda")
            console.log("Utíl")
            break
        case 2:
            console.log("Terça-Feira")
            console.log("Utíl")
            break
        case 3:
            console.log("Quarta-Feira")
            console.log("Utíl")
            break
        case 4:
            console.log("Quinta-Feira")
            console.log("Utíl")
            break
        case 5:
            console.log("Sexta")
            console.log("Utíl")
            break
        case 6:
            console.log("Sábado")
            break
        case 7:
            console.log("Domingo")
            break  
        default:
            console.log("Você digitou um dia da semana inválido")
            console.log(`Digite novamente um dia válido`)
    }
}

diasSemana(3)
diasSemana(10)