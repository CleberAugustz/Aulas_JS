var funcs = []

for (let i = 0; i < 10; I++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
// nesse formato é respeitado conforme o valor index apontado.