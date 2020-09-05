// cadeia de prototipos (propotype chain)
Object.prototype.attr0 = 'Z' // evitar esse tipo de modificação!!!
const avo = { attr1:'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}


console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // ocorrerá shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}:  ${super.status()}`  // utilizando o super, invés do SELF, você está invocando o elemento do objeto ancestral.
    }
}

// estabelecendo a relação de prototype
 
Object.setPrototypeOf(ferrari, carro) // nessa situação, ferrari terá como prototupe CARRO
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)

console.log(volvo)
// por padrão, o console, exibi apenas os elementos pertecentem ao objeto, entretanto, isso não quer dizer que não consigo essa
// os outros atributos

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())