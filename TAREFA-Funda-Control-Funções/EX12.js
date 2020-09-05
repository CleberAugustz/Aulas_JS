function fatorial(n){
    let resultado = 1
    for(i = n; i > 0; i--){
        resultado = resultado * i
    }
    return resultado
}


console.log(`O resultado do fatorial digitado é ${fatorial(5)}`)