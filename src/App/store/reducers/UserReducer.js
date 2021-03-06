import types from '../actions/Types';

// Estado inicial
const initialState = {
    name: "",
    mail: "",
    pass: "",
    historico: [],
    historicoAlbumes: []
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
      case types.ADD_HISTORICO:
        return {
          ...state,
          historico: state.historico.concat(action.cancion)
        };
      case types.ADD_HISTORICO_ALBUMES:
        return{
          ...state,
          historicoAlbumes: state.historicoAlbumes.concat(action.album)
        }
    default:
      return state;
  }
}

export default UserReducer;
