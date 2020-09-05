function tratarErroeLanca(erro){
   // throw new Error('Estamos arrumando')
   // throw 10
   // throw true
   // throw 'Mensagem'
   throw {
       nome: erro.name,
       msg: erro.mensage,
       date: new Date
   }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroeLanca(e)
        } finally {
            console.log('Final')
        }
}

const obj = { nome: 'Roberto'}

imprimirNomeGritado(obj)