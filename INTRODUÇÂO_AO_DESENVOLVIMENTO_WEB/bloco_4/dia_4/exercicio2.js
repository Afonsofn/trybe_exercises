//imprimir as informações
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};
for (let index in info) {
    if (info[index] === info.recorrente &&
        info[index] === "Sim" &&
        info[index] === info2.recorrente) {
            console.log("Ambos recorrentes")
    } else {
            console.log(info[index]+ " e " +info2[index])
    }
}
