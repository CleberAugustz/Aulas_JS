var funcs = []

for (var i = 0; i < 10; I++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()  // resultado é o mesmo
// ele não respeita pois o escopo da função.