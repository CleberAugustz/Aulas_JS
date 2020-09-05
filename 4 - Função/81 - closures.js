// Contexto léxico em ação !

const x = 'global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao)

// no formato acima, o retorno será a variável que está dentro do escopo da função FORA. 
