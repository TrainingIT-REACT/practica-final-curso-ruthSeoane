import { createContext } from 'react'; 

const UserContext = createContext({ 
    signedIn: false, 
    username: "as",
    updateUser: (username) => {} 
});
    
export default UserContext;