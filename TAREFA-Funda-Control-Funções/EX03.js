const potencia = (base, expoente) => {
    resultado = base
        for(i = 1; i < expoente; i++){
            resultado = resultado*base
        }
    console.log(`O Resultado da potência entre ${base} elevado à ${expoente} é igual à ${resultado}`)
}
potencia(3,2)
potencia(3,3)
potencia(5,2)