import { createContext } from 'react'; 

const UserContext = createContext({ 
    signedIn: false, 
    username: "",
    cancionActual: null,
    reproduciendo: false,
    updateUser: (username) => {}, 
    updateCancionActual: (cancionActual) => {},
    updateReproduciendo: (reproduciendo) => {},
});
    
export default UserContext;