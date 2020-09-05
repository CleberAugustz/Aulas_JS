const sequencia = {
    _valor: 1, // convenção, indicando que será uma variavel privada.
    get valor(){ return this._valor++}, // nessa condição, quando atribuir um valor para sequencia.valor, ele irá chamar o SET
    set valor(valor){    // Quando apenas chamado, ele apenas executará o GET, que no caso irá incrementar + 1.
        if(valor > this._valor){
            this._valor = valor    
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 800
console.log(sequencia.valor, sequencia.valor)

