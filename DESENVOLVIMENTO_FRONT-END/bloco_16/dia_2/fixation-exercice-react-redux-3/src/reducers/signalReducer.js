const initialState = {
  signalColor: 'green'
}

export default function signalReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_COLOR":
      return {
        signalColor: action.signalColor,
      }
    default:
      return state;  
  }
}