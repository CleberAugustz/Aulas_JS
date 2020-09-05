function soBoaNoticia(nota){
    if(nota >=7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(5.1)
soBoaNoticia(9)

function seForVerdadeEuFalo(valor){ // recebe um verdadeiro ou falso
    if (valor) {
        console.log('È verdade ...' + valor)
    }
}

seForVerdadeEuFalo()  // false
seForVerdadeEuFalo(null) // false
seForVerdadeEuFalo(undefined) // false
seForVerdadeEuFalo(NaN) // false
seForVerdadeEuFalo('') // false
seForVerdadeEuFalo(0) // false
seForVerdadeEuFalo(-1) // true
seForVerdadeEuFalo(' ') // true
seForVerdadeEuFalo('?') // true
seForVerdadeEuFalo([]) // true
seForVerdadeEuFalo([1,2]) // true
seForVerdadeEuFalo({}) // true