import { getAlbums, getSongsByAlbum } from '../actions/AlbumActions';

// Estado inicial
const initialState = {
    isLoadingAlbums: false,
    isLoadingAlbum: false,
    isLoadingSongs: false,
    albums: [],
    error: false,
    cancionesAlbumActual: []
}


// Implementamos el reducer
const AlbumsReducer = (state = initialState, action) => {
  switch(action.type) {
    case String(getAlbums.pending):
      return {
        ...state,
        isLoadingAlbums: true,
        error: false,
      };
    case String( getSongsByAlbum.pending):
      return {
        ...state,
        isLoadingSongs: true,
        error: false,
      };
    case String(getAlbums.rejected):
      return {
        ...state,
        isLoadingAlbums: false,
        error: true,
      };
    case String(getSongsByAlbum.rejected):
      return {
        ...state,
        isLoadingSongs: false,
        error: true,
      };
    case String(getAlbums.fulfilled):
      return {
        ...state,
        isLoadingAlbums: false,
        albums: action.payload,
        error: false,
      };
    case String(getSongsByAlbum.fulfilled):
      return{
        ...state,
        isLoadingSongs: false,
        error: false,
        cancionesAlbumActual: action.payload
      };
    default:
      return state;
  }
}

export default AlbumsReducer;