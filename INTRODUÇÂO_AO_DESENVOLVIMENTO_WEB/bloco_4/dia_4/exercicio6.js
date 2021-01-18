//retornar com maior quantidade de caracteres
function acharNome(nomes) {
    let maiorPalavra = "a"
    for (let index in nomes) {
        if (nomes[index].length > maiorPalavra.length){
            maiorPalavra = nomes[index]
        }
    }
    return maiorPalavra
}
console.log(acharNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

