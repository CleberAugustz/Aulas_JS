function calculadora(n1 = 0, n2 = 0, operacao){
    switch(operacao){
        case '+':
            return `${n1} + ${n2} = ${n1+n2}`
        case '-':
            return `${n1} - ${n2} = ${n1-n2}`
        case '*':
            return `${n1} * ${n2} = ${n1*n2}`
        case '/':
            return `${n1} / ${n2} = ${n1/n2}`
        default:
            return 'Digite uma operação válida'
    }
}

console.log(calculadora(10, 5, '+'))
console.log(calculadora(10, 4, '*'))
console.log(calculadora(5, 2, '/'))
console.log(calculadora(2, '//'))