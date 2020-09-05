function calculaMedia(notas){
    return ((notas[0]*4) + (notas[1]*3) + (notas[2]*3))/10
}

function aprovacao(nome,n1, n2, n3){
    let notas = []
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.sort((a,b) => a < b ? 1 : -1)
    let media = calculaMedia(notas)
    if(media >= 5){
        return `Parabéns ${nome}, suas notas são ${n1}, ${n2}, ${n3}, sua média é ${media} e você está APROVADO!!`
    } else{
        return `Olá ${nome}, suas notas são ${n1}, ${n2}, ${n3} e sua média é ${media}, infelizmente você está REPROVADO !!`
    }
}

console.log(aprovacao('Cleber', 2, 6, 10))

