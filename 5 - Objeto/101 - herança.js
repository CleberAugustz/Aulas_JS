function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1,aula2)


// SImulando o new

function novo(f, ...params){ // ... faz com que receba varios parametros e concatene em um array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'até breve', 456)

console.log(aula3, aula4)