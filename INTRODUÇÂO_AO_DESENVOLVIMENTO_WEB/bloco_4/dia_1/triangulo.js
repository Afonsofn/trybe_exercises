function angulos(angulo1, angulo2, angulo3) {
    if (angulo1+angulo2+angulo3 == 180) {
        return "É um triangulo"
    } else {
        return "ERRO"
    }
}
console.log(angulos(60, 60, 60))