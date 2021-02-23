const INITIAL_STATE = {}

export default function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_REGISTER":
      return {
        ...state,
        data: action.input
      }
    default: 
    return state;
  }
}