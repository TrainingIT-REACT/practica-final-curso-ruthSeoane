import { getAlbums, getSongsByAlbum, getBestAlbums, getBestSongs } from '../actions/AlbumActions';

// Estado inicial
const initialState = {
    isLoading: false,
    albums: [],
    error: false,
    cancionesAlbumActual: [],
    bestAlbums: [],
    bestSongs: [],
}


// Implementamos el reducer
const AlbumsReducer = (state = initialState, action) => {
  switch(action.type) {
    case String(getAlbums.pending) || String(getSongsByAlbum.pending) || String(getBestAlbums.pending) || String(getBestSongs.pending):
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case String(getAlbums.rejected) || String(getSongsByAlbum.rejected) || String(getBestAlbums.rejected) || String(getBestSongs.rejected):
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
    case String(getSongsByAlbum.fulfilled):
      return{
        ...state,
        isLoading: false,
        error: false,
        cancionesAlbumActual: action.payload
      };
    case String(getBestAlbums.fulfilled):
      return{
        ...state,
        bestAlbums: action.payload,
      }
      case String(getBestSongs.fulfilled):
        return{
          ...state,
          bestSongs: action.payload,
        }
    default:
      return state;
  }
}

export default AlbumsReducer;