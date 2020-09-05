function leitor(numeros){
    let impar = []
    let par = []
    for(i = 0; i < numeros.length; i++){
        calc = numeros[i]%2
        if (calc == 0){
            par.push(numeros[i])
        } else {
            impar.push(numeros[i])
        }
    }
    return `Os números pares são ${par} \nOs números impares são ${impar}.`
}

console.log(leitor([1, 2, 5, 6, 7, 8, 9, 10]))