//achar o maior numero
function array(teste) {
    let maiorNumero = 0
    for (let index in teste){
        if (teste[index] > maiorNumero) {
            maiorNumero = teste[index]
        }
    }
    return maiorNumero
}
console.log(array([2, 3, 6, 7, 10, 1]))