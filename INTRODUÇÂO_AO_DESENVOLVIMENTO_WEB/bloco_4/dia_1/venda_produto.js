function vendaProduto(valorBruto, valorFinal, quantidade) {
    let imposto = valorBruto / 5
    let custoTotal = valorBruto + imposto
    let lucroTotal = valorFinal - custoTotal
    let vendaFinal = lucroTotal * quantidade
    if (valorBruto < 0 || valorFinal < 0 || quantidade < 0) {
        console.log("ERRO")
    }
    console.log(vendaFinal)
}
vendaProduto(100, 150, 1000)