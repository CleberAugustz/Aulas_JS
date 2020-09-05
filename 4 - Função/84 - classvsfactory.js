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


// a maior diferça de uma para a outra é que quando usamos a função arrow, a mesma respeita o escopo local, criando um closure local.
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Joao')
p2.falar()