const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){ // nessa situação, a função (Minhafunção), não vai usar a variavel que está mais próxima, mas sim a que está no escopo global
    const valor = 'Local' // pois no momento de criação da função, a mesma por não ter uma variável local dentro do seu escopo, já defini quala variavel que ela irá capturar o valor, sendo aquela que está além do seu escopo, no caso a global.
    minhaFuncao()  // Que leva em conta o CLOSURE - AULA 81
}

exec()