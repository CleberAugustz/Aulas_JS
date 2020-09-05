function bissexto(ano){
    if(ano%400 == 0){
        console.log(`O ano de ${ano} é Bissexto`)
    } else if(ano%100 == 0){
        console.log(`O ano de ${ano} não é Bissexto`)
    } else if(ano%4 == 0){
        console.log(`O ano de ${ano} é Bissexto`)
    } else {
        console.log(`O ano de ${ano} Não é Bissexto`)
    }
}
function testaTodos(comeco, fim){
    for (i = comeco; i <= fim; i++){
        bissexto(i)
    }
}

testaTodos(1999, 2020)