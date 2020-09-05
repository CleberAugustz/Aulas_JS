const calc = (dividendo, divisor) => {
    div = dividendo / divisor
    resto = dividendo % divisor
    console.log(`Os resultados entre ${dividendo} e ${divisor} é: Divisão = ${div} e o Resto da Divisão = ${resto}`)
}

calc(2,2)
calc(3,2)
calc(5,3)
calc(10,2)