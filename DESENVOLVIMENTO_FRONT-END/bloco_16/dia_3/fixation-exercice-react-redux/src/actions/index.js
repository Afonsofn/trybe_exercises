export default function addRegister(value) { // Essa é a sintaxe padrão da action.
  return {
    type: 'ADD_REGISTER',
    data: value,
  };
}