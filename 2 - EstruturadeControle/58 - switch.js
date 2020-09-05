const imprimirResultado = function(nota) {
    switch (Math.floor(nota)){  // ele está arredondando o valor da nota para baixo e atribuindo como parâmetro para switch
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // termina a execução aqui, do contrário ele continua executando os cases abaixos.
            
        case 8:
        case 7:
            console.log('Aprovado')
            break

        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break

        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break

        default:
            console.log('Nota inválida')
        
    }
}

imprimirResultado(10)

imprimirResultado(8.9)

imprimirResultado(6.55)

imprimirResultado(2.3)

imprimirResultado(11)