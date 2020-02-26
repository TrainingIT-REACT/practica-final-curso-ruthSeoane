import React from 'react';

//CSS
import './BarraReproduccion.css';

class BarraReproduccion extends React.Component{

    render(){
        return(
            <div className="barraReproduccion"> 
                <div className="botonReproduccion"> {/* repeat */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
                    </svg>
                </div>
                <div className="botonReproduccion"> {/*atras*/}
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                    </svg>
                 </div> 
                <div className="botonReproduccion"> {/* pause */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                    </svg>

                </div>
                <div className="botonReproduccion"> {/*delante*/}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                    </svg>
                </div>
                <div className="botonReproduccion"> {/*play again*/}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                    </svg>
                </div>
            </div>
        )
    }
}

export default BarraReproduccion;