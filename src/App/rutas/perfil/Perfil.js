import React from 'react';
import { Provider } from "react-redux";

import store from './../../store/Store';

import './Perfil.css';

class Perfil extends React.Component{

    componentDidMount() {
        if(document.getElementById("botonOrigen") !== null)
            document.getElementById("botonOrigen").classList.add("active");  
      };


    componentWillUnmount(){
        if(document.getElementById("botonOrigen") !== null)
            document.getElementById("botonOrigen").classList.remove("active")   
    }

    render(){
        return(
            <div className="datosPerfil">
                <Provider store={store}>
                    <h1 className="miPerfilText">Mi perfil</h1>
                    <div className="textoGnal"><div className="textoG">Nombre usuario:&nbsp;</div><div className="textoP">{store.getState().UserReducer.name}</div></div>
                    <div className="textoGnal"><div className="textoG">Usuario:&nbsp;</div> <div className="textoP">{store.getState().UserReducer.mail}</div></div>
                </Provider>
            </div>

        )
    }
}

export default Perfil;