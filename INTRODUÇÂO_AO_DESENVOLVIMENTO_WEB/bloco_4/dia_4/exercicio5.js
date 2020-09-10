//achar o menor numero
function array(teste) {
    let menorNumero = 0
    for (let index in teste){
        if (teste[index] > menorNumero) {
            menorNumero = teste[index]
        }
    }
    for (let index in teste){
        if (teste[index] < menorNumero) {
            menorNumero = teste[index]
        }
    }
    return menorNumero
}
console.log(array([2, 4, 6, 7, 10, 0, -3]))