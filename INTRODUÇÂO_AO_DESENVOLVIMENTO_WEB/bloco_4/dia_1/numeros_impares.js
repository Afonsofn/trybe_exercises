function numeros(numero1, numero2, numero3) {
    if (numero1 % 2 == 1 || numero2 % 2 == 1 || numero3 % 2 == 1 ) {
        console.log("Existe número impar")
    }
}
numeros(10,15,20)

// ou pode ser assim
function numeros(numero1, numero2, numero3) {
    if (numero1 % 2 != 0 || numero2 % 2 != 0 || numero3 % 2 != 0 ) {
        console.log("Existe número impar")
    }
}
numeros(10,15,20)