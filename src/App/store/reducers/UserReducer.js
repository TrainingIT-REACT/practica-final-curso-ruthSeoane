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
        name: action.name
      };
    case types.UPDATE_MAIL:
      return {
        mail: action.mail
      };
    case types.UPDATE_PASS:
      return {
        pass: action.pass
      };
    default:
      return state;
  }
}

export default UserReducer;
