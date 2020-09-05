function rand({mim = 0, max = 1000}) {
    const valor = Math.random() * (max - mim) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40}
console.log(rand({max: 50, mim: 40}))

console.log(rand(obj))
console.log(rand({min: 55}))
console.log(rand({}))
//  console.log(rand()) // dessa forma irá ocorrer um erro, pois não existe nenhum objeto passado.