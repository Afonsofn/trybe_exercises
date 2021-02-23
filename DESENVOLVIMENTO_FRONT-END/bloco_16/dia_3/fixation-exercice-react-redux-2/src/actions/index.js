export default function addItem(item) { // Sintaxe padrão da action.
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: {
      item,
    },
  }
};