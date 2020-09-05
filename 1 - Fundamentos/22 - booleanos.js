let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
// transformando um valor para verdadeiro ou falso
console.log(isAtivo)
console.log(!!isAtivo) // transformado para verdadeiro ou falso

console.log('os verdadeiros...')

console.log(!!3) // verdadeiros
console.log(!!-1)
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//falsos

console.log('os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')

console.log(!!('' || null || 0 || 'epa' || 123))

let nome = ''

console.log(nome || 'Desconhecido') // se o nome estiver preenchido , ele retorna o a variavel NOME, do contrario,e ele retorna DESCONHECIDO
