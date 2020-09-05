// a ideia eh fugir do escopo global ou mais abrangente.
// iife -> immediately invoked function expression
// é executada no mesmo tempo que é criada.
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

