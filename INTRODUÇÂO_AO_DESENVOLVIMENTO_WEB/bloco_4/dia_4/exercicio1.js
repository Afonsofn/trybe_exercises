//inprimir as informações
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Bem-vinda, ${info.personagem}`)

info.recorrente = "Sim"
console.log(info.recorrente)

for (let index in info) {
    console.log(index)
}

for (let index in info) {
    console.log(info[index])
}