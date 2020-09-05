const prod1 = {} // declaração literal para object
prod1.nome = 'Celular ultra Mega'
prod1.preco = 49998.90
prod1['Desconto legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

