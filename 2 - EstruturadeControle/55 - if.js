function teste1(num){
    if (num > 7){
        console.log(num)
        console.log("Final")
    }
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); // dessa forma, o bloco está finalizado no ponto e vírgula  --- não usar na estruturas de controle
     {
        console.log(num)
    }
}

teste2(6)
teste2(8)