// par nome/valor

const saudacao = 'Opa' // contexto léxico

function exec() {

    const saudacao = 'Falaaaa' // contexto léxico 2
    return saudacao
}


// Objetos sãop grupos aninhado de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 80,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123

    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)