const prod1 =  {
    nome: '...',
    preco: 45
}

const prod2 =  {
    nome: '...',
    preco: 123123
}

// tem o mesmo resultado

// factory simples

function criar(){
    return {
        nome: '....',
        preco: 45
    }
}

console.log(criar())
console.log(criar())
