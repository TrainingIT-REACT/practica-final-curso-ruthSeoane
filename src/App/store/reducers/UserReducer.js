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
        name: action.name,
        mail: state.mail,
        pass: state.pass,
      };
    case types.UPDATE_MAIL:
      return {
        name: state.name,
        mail: action.mail,
        pass: state.pass,
      };
    case types.UPDATE_PASS:
      return {
        name: state.name,
        mail: state.mail,
        pass: action.pass
      };
    default:
      return state;
  }
}

export default UserReducer;
