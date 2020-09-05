function escrevendo(num){
    switch(num){
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return "Número Inválido"
    }
}

console.log(escrevendo(1))
console.log(escrevendo(10))
console.log(escrevendo(11))
console.log(escrevendo(0))