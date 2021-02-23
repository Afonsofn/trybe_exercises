export default function selectColor(cor) { // Essa é a sintaxe padrão da action.
  return {
    type: "SELECT_COLOR",
    color: cor,
  };
}