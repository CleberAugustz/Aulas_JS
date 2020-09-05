const nome = "Rebeca"
const concatenacao = "ola" + nome + '!'

const template = `
            ola'
            ${nome}!`
        
console.log(concatenacao, template)

// expressões...

console.log(`1 + 1 = ${1 + 1}`)

const up = text => text.toUpperCase()

console.log(`Ei...${up('Cuidado')}!`)