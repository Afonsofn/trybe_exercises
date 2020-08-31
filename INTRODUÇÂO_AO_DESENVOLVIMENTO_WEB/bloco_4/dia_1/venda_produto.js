let valorBruto = 100
let valorFinal = 150
let quantidade = 1000
let imposto = valorBruto / 5
let custoTotal = valorBruto + imposto
let lucroTotal = valorFinal - custoTotal
let vendaFinal = lucroTotal * quantidade
if (valorBruto < 0 || valorFinal < 0 || quantidade < 0) {
    console.log("ERRO")
}
console.log(vendaFinal)