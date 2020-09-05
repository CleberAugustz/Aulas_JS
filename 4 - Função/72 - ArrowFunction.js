function pessoa(){
    this.idade = 0

    setInterval(() => { // diferente dos exemplos anteriores, o qual usamos a criação de function normais
        this.idade++ // a arrow function, não permiti a variação de contexto, fazendo com que o this, referencie PESSOA. 
        console.log(this.idade)
    }, 1000)
}

new pessoa