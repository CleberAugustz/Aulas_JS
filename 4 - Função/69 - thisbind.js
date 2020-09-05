// nesse contexto, o this terá como definição o nome do objeto, que no caso é PESSOA.

const pessoa = {
    saudacao: 'Bom Dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar

falar() // Confliet entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()