import React from 'react';
import { Provider } from "react-redux";

//Store
import store from './../../store/Store';

//CSS
import './Historico.css';

class Historial extends React.Component{

    componentDidMount() {
        document.getElementById("botonOrigen").classList.add("active");  
      };


    componentWillUnmount(){
    document.getElementById("botonOrigen").classList.remove("active")   
    }

    render(){
        let id = 0;
        return(
            <Provider store={store}>
                <div className="historial">
                    <h2> {store.getState().UserReducer.name}, este es tu historial de reproducci&oacute;n: </h2>
                
                    {store.getState().UserReducer.historico.length === 0 ? (
                        <p>Vaya, parece que no has escuchado nada todav&iacute;a :( </p>
                    ):(
                        <ol className="cancionesList">
                            
                            {store.getState().UserReducer.historico.map(cancion =>   
                                <li key={id=id+1} className="cancionItem">
                                    <div className = "datosCanciones">
                                        {store.getState().AlbumsReducer.albums[cancion.album_id].artist} - {cancion.name}&nbsp;
                                        ({ 
                                            Math.floor(cancion.seconds / 60) +
                                            ":"+
                                            Math.floor(cancion.seconds%60)
                                        })
                                    </div>
                                </li>)
                            }
                        </ol>
                    )} 
                </div>
            </Provider>

        )
    }
}

export default Historial;