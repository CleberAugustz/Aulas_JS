const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)

imprimirResultado(2, 5, soma)
imprimirResultado(3, 5, function(x, y){
    return x - y
})

imprimirResultado(2, 2, (x,y) => x * y)

const pessoa = {
    /*falar: function(){
        console.log("Opa")
    }*/ // ambas tem o mesmo resultado.
    falar(){
        console.log("Opa")
    }
}

pessoa.falar()