console.log(soma(3, 5))
// function declaration -- é unica que é possível de ser chamada antes, pois o js criar todas as function antes de executar .
function soma(x, y){
    return x + y
}

// function expression 
const sub = function (x,y){
    return x - y
}

// named function expression *** pouco usada.
const mult = function mult(x, y){
    return x * y
}
 

 