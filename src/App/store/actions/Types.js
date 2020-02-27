// Definimos la lista de acciones
const actions = [ 
    // Usuarios
    "UPDATE_NAME",
    "UPDATE_MAIL",
    "UPDATE_PASS",
    "ALBUMS_LOADING",
    "ALBUMS_LOADED",
    "ALBUMS_ERROR",
  ];
  
  // Las convertimos en un objeto
  const actionTypes = {};
  actions.forEach(action => {
    actionTypes[action] = action;
  });
  
  export default actionTypes;
  