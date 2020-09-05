const a = 1
const b = 2
const c = 3

// amba tem o mesmo resultado, sendo uma mais antiga e outra mais recente.
const obj = {a: a, b: b, c: c}
const obj2 = {a, b, c}

console.log(obj)
console.log(obj2)

// outra formas de declara atributos dentro de um objeto
const nomeAttr = 'Nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)
// segue a mesma ideia do decima, entretanto, muda a forma declarativa.
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)


const obj5 = {
    // forma antiga
    funcao1: function(){
        //...

    },
    // nova forma de declara função.
    funcao2(){
        //..
    }
}

// nova forma

console.log(obj5)