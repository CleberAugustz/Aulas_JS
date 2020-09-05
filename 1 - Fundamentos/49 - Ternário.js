const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

/* tem o mesmo efeito, lembrando que o arrow, "Encurta" a literação

const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

*/

console.log(resultado(7))

console.log(resultado(6.7))

const status = nota >= 7 ? 'aprovado' : 'reprovado'