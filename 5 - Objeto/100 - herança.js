console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// formato abaixo eh possivel fazer o caminho contrario é dessa forma, eh possível mudar o prototype do objeto
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

// Como declaramos uma função chmada reverser, eh possivel chama-la e através dela, é possível reverter a string abaixo.
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}


console.log([1,2,3,4,5].first())

// atenção com os efeitos colaterais  NAO SUBSTITUIR FUNÇÕES JAH PRESENTES
String.prototype.toString = function (){
    return 'Lascou tudo'
}
