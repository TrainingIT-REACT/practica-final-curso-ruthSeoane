import React from 'react';
import { Provider } from "react-redux";
import { Route, NavLink } from "react-router-dom";

//Store
import store from '../../store/Store';

//CSS
import './Historico.css';

class HistorialAlbumes extends React.Component{

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
                    <h2> {store.getState().UserReducer.name}, este es tu historial de visitas a &aacute;lbumes: </h2>
                
                    {store.getState().UserReducer.historicoAlbumes.length === 0 ? (
                        <p>Vaya, parece que no has visitado nada todav&iacute;a :( </p>
                    ):(
                        <ol className="cancionesList">
                            
                            {store.getState().UserReducer.historicoAlbumes.map(album =>   
                                <li key={id=id+1} className="cancionItem"> 
                                    <div className = "datosCanciones">
                                        <Route>
                                            <NavLink to={"/albumes/"+album.id}>{album.name}&nbsp;-&nbsp;{album.artist}</NavLink>
                                        </Route>       
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

export default HistorialAlbumes;