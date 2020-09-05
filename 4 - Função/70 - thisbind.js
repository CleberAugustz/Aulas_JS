function pessoa (){
    this.idade = 0

    const self = this // dessa forma, o this não varia, pois foi atribuido para uma variavel constante, o que torna imutavel.
    setInterval(function(){
        self.idade++  
        console.log(this.idade)
    }/*.bind(this)*/, 1000) // setInterval, possibilita disperar outra função em um determinado intervalo.
}

new pessoa // cria um novo objeto de pessoa.

