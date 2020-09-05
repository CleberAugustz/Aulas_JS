function jurosSimples(capini, txjuros, temp){
        resultado = capini + ((capini * txjuros) * temp)
        console.log(`VOcê está adquirindo um bem de ${capini} e o valor a prazo é ${resultado.toFixed(2)}`)
}


function jurosComposto(capini, txjuros, temp ){
    resultado = capini * (Math.pow(1+txjuros,temp))
    console.log(`Seu financiamento de ${capini} com juros composto é igual à ${resultado.toFixed(2)}`)
}

jurosSimples(1000, 0.1, 2)
jurosComposto(1000, 0.1, 2)
jurosComposto(500.000,0.05,3)