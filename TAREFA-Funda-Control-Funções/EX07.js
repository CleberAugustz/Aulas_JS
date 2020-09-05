function bhaskara(a, b, c){
    delta = Math.pow(-b,2)*(-4*a*c)
    if (delta < 0){
        console.log("Delta é negativo")
    } else {
        x1  = -b + delta / 2 * a
        x2 = -b - delta / 2 * a
        console.log(`As duas respostas são x1 = ${x1} x2 = ${x2}`)
    }
}

bhaskara(-2, -2, 1)
bhaskara(3, 2, 2)
bhaskara(-3, -1, 1)

