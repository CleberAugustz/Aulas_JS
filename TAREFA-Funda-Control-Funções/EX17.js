function aumento(plano, salario){
    switch(plano.toUpperCase()){
        case 'A':
            return `Seu salário é ${salario}, receberá um aumento de 10% . Seu Salário com aumento será ${salario*1.10}`
        case 'B':
            return `Seu salário é ${salario}, receberá um aumento de 15% . Seu Salário com aumento será ${salario*1.15}`
        case 'C':
            return `Seu salário é ${salario}, receberá um aumento de 20% . Seu Salário com aumento será ${salario*1.20}`
        default:
            return 'Dados inválidos'
    
    }
}

console.log(aumento('a', 2000))
console.log(aumento('b', 1000))
console.log(aumento('c', 1000))
console.log(aumento('a', 1000))