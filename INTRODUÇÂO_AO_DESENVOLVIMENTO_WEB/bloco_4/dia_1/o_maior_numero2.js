function numeros(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        return numero1
    } else if (numero2 > numero1 && numero2 > numero3) {
        return numero2
    } else {
        return numero3
    }
}
numeros(5, 10, 15)

// Ou com dois IFs
function numeros(numero1, numero2, numero3) {
    let maiorNumero = ""
    if (numero1 > numero2) {
        maiorNumero = numero1
    } else {
        maiorNumero = numero2
    }

    if (maiorNumero > numero3) {
        return maiorNumero
    } else {
        return numero3
    }
}
numeros(5, 10, 15)