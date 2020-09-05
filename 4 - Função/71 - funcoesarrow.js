let dobro = function(a){
    return 2 * a
}

let dobro2 = (a) => {
    return 2 * a
}

let dobro3 = a => 2 * a  // quando remove o bloco da função, e fica funcionando apenas em uma única linha
// return implicito

console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

let ola2 = () => 'Ola' // quando não há parâmetros, é necessário que no minimo tenha os parênteses
ola = _ => 'Ola' // ou _, o que indica que nõa há parâmetro. // não é padrão.

console.log(ola2())


