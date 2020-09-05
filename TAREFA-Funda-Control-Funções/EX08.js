function record(n){
    contador = 0
    menor = n[0]
    pior = 1
    console.log(menor)
    for(i = 0; i <= n.length; i++){
        //console.log(`${n[i]} ${n[i-1]}`)
        if(n[i] > n[i-1]){
            console.log("Bateu recorde anterior")
            console.log(`${n[i]}`)
            contador++
        }
    }
    for(i = 0; i <= n.length; i++){
        if(menor > n[i]){
            menor = n[i]
            pior = i+1
            console.log(menor)
        }
    }
return `Ele bateu seu record ${contador} vezes e seu pior jogo foi no ${pior} jogo`
}
const array = [4, 1, 10, 2, 25, 30, 15, 45]
console.log(record([10, 5, 25, 1, 33, 70]))