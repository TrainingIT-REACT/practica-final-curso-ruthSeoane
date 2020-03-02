import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getAlbums = createAsyncAction('ALBUMS', async () => {
    const res = await fetch('/albums')
    return await res.json();
});

export const getSongsByAlbum = createAsyncAction('SONGS', async (id) => {
  const res = await fetch('/songs?album_id='+id);
  return await res.json();
});

export const getBestAlbums = createAsyncAction('BEST_ALBUMS', async () => {
  const res = await fetch('http://localhost:3001/albums?_start=0&_limit=4');
  return await res.json();
});
  