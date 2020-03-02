import { createContext } from 'react'; 

const UserContext = createContext({ 
    signedIn: false, 
    username: "",
    cancionActual: "",
    updateUser: (username) => {}, 
    updateCancionActual: (cancionActual) => {} 
});
    
export default UserContext;