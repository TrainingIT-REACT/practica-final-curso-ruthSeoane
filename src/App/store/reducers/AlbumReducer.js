import { getAlbums } from '../actions/AlbumActions';

// Estado inicial
const initialState = {
    isLoading: false,
    albums: [],
    error: false,
}


// Implementamos el reducer
const AlbumReducer = (state = initialState, action) => {
  console.log(action.type);
  switch(action.type) {
    case String(getAlbums.pending):
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case String(getAlbums.fulfilled):
      return {
        ...state,
        isLoading: false,
        albums: action.payload,
        error: false,
      };
    case String(getAlbums.rejected):
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
}

export default AlbumReducer;