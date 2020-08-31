let numero1 = 10
let numero2 = 15
let numero3 = 20

if (numero1 % 2 == 1 || numero2 % 2 == 1 || numero3 % 2 == 1 ) {
    console.log("Existe número impar")
}

// ou pode ser assim

if (numero1 % 2 != 0 || numero2 % 2 != 0 || numero3 % 2 != 0 ) {
    console.log("Existe número impar")
}