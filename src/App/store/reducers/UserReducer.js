import types from '../actions/Types';

// Estado inicial
const initialState = {
    name: "",
    mail: "",
    pass: ""
}

// Implementamos el reducer
const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_NAME:
      return {
        ...state,
        name: action.name
      };
    case types.UPDATE_MAIL:
      return {
        ...state,
        mail: action.mail
      };
    case types.UPDATE_PASS:
      return {
        ...state,
        pass: action.pass
      };
    default:
      return state;
  }
}

export default UserReducer;
