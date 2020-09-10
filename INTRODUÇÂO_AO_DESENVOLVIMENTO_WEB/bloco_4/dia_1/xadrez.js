function xadrez(peca){
    switch (peca) {
        case "rei":
            console.log("horizontal, vertical e diagonal")
            break;
        case "rainha":
            console.log("horizontal, vertical e diagonais")
            break;
        case "bispo":
            console.log("diagonal")
            break;
        case "cavalo":
            console.log("forma de “L”")
            break;
        case "torre":
            console.log("vertical ou horizontal")
            break;
        case "peao":
            console.log("uma casa para frente")
            break;
        default:
            console.log("ERRO")
            break;
    }
}
xadrez("bispo")