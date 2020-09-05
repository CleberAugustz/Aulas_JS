const diasSemana = (fruta) => {
    switch (fruta.toUpperCase()){
        case 'MAÇA':
            console.log("Não vendemos esta fruta aqui")
            break
        case 'KIWI':
            console.log("Estamos com escassez de Kiwis")
            break
        case 'MELANCIA':
            console.log("Aqui está, são 3 reais o KG")
            break
        default:
            console.log("Você digitou um nome inválido")
    }
}

diasSemana('maça')
diasSemana('Maça')
diasSemana('kiwi')
diasSemana('Maças')
diasSemana('Melancia')
diasSemana('MELANCIA')