import { getAlbumById, getAlbums, getSongsByAlbum } from '../actions/AlbumActions';

// Estado inicial
const initialState = {
    isLoading: false,
    albums: [],
    error: false,
    albumActual: null,
    cancionesAlbumActual: [],
    cancionActual: null
}


// Implementamos el reducer
const AlbumsReducer = (state = initialState, action) => {
  console.log(action.type);
  switch(action.type) {
    case String(getAlbums.pending || getAlbumById.pending || getSongsByAlbum.pending):
      return {
        ...state,
        isLoading: true,
        error: false,
      }; 
    case String(getAlbums.rejected || getAlbumById.rejected || getSongsByAlbum.rejected):
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case String(getAlbums.fulfilled):
      return {
        ...state,
        isLoading: false,
        albums: action.payload,
        error: false,
      };
    case String(getAlbumById.fulfilled):
      console.log("----------------" );
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        error: false,
        albumActual: action.payload,
      };
    case String(getSongsByAlbum.fulfilled):
      return{
        ...state,
        isLoading: false,
        error: false,
        cancionesAlbumActual: action.payload
      };

    default:
      return state;
  }
}

export default AlbumsReducer;