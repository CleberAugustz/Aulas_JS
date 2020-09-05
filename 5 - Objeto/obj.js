// CÓDIGO NÃO EXECUTÁVEL

// Procedural

processamento(valor1, valor2, valor3)

//OO
ojveto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        //..
    }
}

objeto.processamento() // foco pasou a ser o objeto e não mais as funções

// Princípios importantes.
// 1. Significados de abstração -- Um objeto do mundo real e traduzir/abstrair para dentro do sistema/software.
// EXEMPLO: Carro -- tem: peso, velocidade máxima, método ligar e desligar, largura, altura
// Dependendo da sua necessidade, como por exemplo uma mecância e o detran
// Ambas usaram o objeto carro, porém cada uma tem sua necessidade.

// 2. Encapsulamento
// Capacidade maximizar a comunicação entre os elementos de fora do objeto/função, deixar pouco visivel e dependende de informações externas.
// evitar ACOPLAMENTO.

// 3. Herança (prototype)
// Exemplo: Pai e Filho, o que tem em Pai, pode ou não terno filho. O que um sobrinho que não há
// nenhuma relação com o Pai, mas sim o Pai do Sobrinho.
// Características, Atributos e Comportamentos.
// Coomo Pai tem seu Pai, o torna o pai do pai, o avô e seu neto herda características do Pai, e do Avô.
// Porém quanto mais ancestral a herança, mais genérica é as características.
// ATENÇÃO!! priorize a composição, ao invés da herança.


// 4. Polimorfismo
// multiplas formas -- é um conceito mais abstrato, o mais genérico, pode ir para mais concreto como 
// Carro (Genérico) -- pode tornar se uma Ferrari.
// Subtipos..
