import React from 'react';

//Otros componentes
import Cancion from './Cancion';

import UserContext from "../privateRoute/UserContext";

//CSS
import './BarraReproduccion.css';

class BarraReproduccion extends React.Component{

    render(){
        return(
            <div className="barraReproduccion">
                <div className="cancion">
                    <Cancion />
                </div>
                <UserContext.Consumer>
                {({  reproduciendo, updateReproduciendo, cancionActual }) => {
                return(
                    <div className="botones"> 

                        {reproduciendo ? (
                            
                            <div className="botonReproduccion"
                                onClick={()=>{
                                    if (cancionActual !== ""){
                                        updateReproduciendo(false);
                                    }
                                }}
                            
                            > {/* pause */}
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                                </svg>
                            </div>
                            
                        ) : (
                            <div className="botonReproduccion"   
                                onClick={()=>{
                                    if (cancionActual !== ""){
                                        updateReproduciendo(true);
                                    }
                            }}> {/* play */}
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                                </svg>
                            </div>
                        )}
                    
                    </div>)
                }}
                </UserContext.Consumer>
            </div>
        )
    }
}

export default BarraReproduccion;