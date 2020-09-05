const triangulo = function(n1, n2, n3){
    if (n1 == n2 && n2 == n3){
        console.log("É um triângulo Equilátero.")
    } else if(n1 == n2 || n2 == n3 || n3 == n1){
        console.log("É um triângulo Isósceles")
    } else {
        console.log("É um triãngulo Escaleno")
    }
}

triangulo(1, 1, 1)
triangulo(2, 2, 3)
triangulo(2, 3, 5)
triangulo(1, 2, 2)
triangulo(5, 5, 5)