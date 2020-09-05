const escola = "Cleber"

console.log(escola.charAt(4)) // ele retornará o quarto caractere da string.

console.log(escola.charAt(5)) // ela não retornará um erro, mesmo não existindo um elemento com essa posição na string.

console.log(escola.charCodeAt(3)) // dessa forma, ele encontrará o caractere 3 e retornará qual é o unicode dele.

console.log(escola.indexOf('3')) // ele encontra onde o index do elemento procurado.

console.log(escola.substring(1)) // dessa forma ele faz uma iteração e pula o primeiro caractere (MESMO SENDO ESTRANHO, POIS O PRIMEIRO É O INDEX 0.
console.log(escola.substring(0, 3)) // Faz a mesma função, entretanto, ele inicia no 1 primeiro e termina no terceiro. Ele "SELECIONA" os elementos
// que deseja exiibir.

console.log('Escola'.concat(escola).concat("!")) // ele concatena cada elemento.

console.log(escola.replace('b', 's')) // ele substitui um caractere encontrado dentro da string por outro caractere.

console.log('Ana, Maria, Pedro'.split(',')) //convertendo essa string pára array.


 