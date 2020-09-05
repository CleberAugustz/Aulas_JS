function escolherVeiculo(modelo){
    switch(modelo.toLowerCase()){
        case 'hatch':
            return "Compra efetuado com Sucesso"
        case 'sedan':
        case 'caminhonete':
        case 'motocicleta':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }

}

console.log(escolherVeiculo('hatch'))
console.log(escolherVeiculo('motocicleta'))
console.log(escolherVeiculo('caminhonete'))
console.log(escolherVeiculo('CaminhonetE'))
console.log(escolherVeiculo('sedan'))
console.log(escolherVeiculo('triciculo'))