function imposto(mes, valor){
    if(mes > 0 && mes < 13){
        return (valor*(1.05**(mes-1))).toFixed(2)  
    } else {
        return `Informações inválida.` 
    }
    
}

console.log(imposto(4, 100))