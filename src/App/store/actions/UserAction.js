import types from './Types';

export const updateName = (name) => ({
  type: types.UPDATE_NAME,
  name
});


export const updateMail = (mail) => ({
    type: types.UPDATE_MAIL,
    mail
  });

  
export const updatePass = (pass) => ({
    type: types.UPDATE_PASS,
    pass
  });

  
export const addHistorico = (cancion) => ({
    type: types.ADD_HISTORICO,
    cancion
  });

  export const addHistoricoAlbumes = (album) => ({
    type: types.ADD_HISTORICO_ALBUMES,
    album
  });