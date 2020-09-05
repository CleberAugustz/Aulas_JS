// na class a variável fica variando conforme a sua declaração

class pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('Joao')
p1.falar()
// Construtora - Desafio
function criarPessoa(nome){
        nome = nome
        this.falar = function(){
            console.log(`Meu nome é ${nome}`)
        }
}

const p2 = new criarPessoa('João')
p2.falar()