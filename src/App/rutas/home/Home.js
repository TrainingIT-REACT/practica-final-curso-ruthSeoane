import React, { Component } from 'react';
import { Provider } from "react-redux";

//Store
import store from './../../store/Store';

//Componentes
import AlbumesRecomendados from './AlbumesRecomendados';
import CancionesRecomendadas from './CancionesRecomendadas';

class Home extends Component{

    render(){
    
        return (
            <div>
                <Provider store={store}>
                    <AlbumesRecomendados/>
                    <CancionesRecomendadas/>
                </Provider>
            </div>
        )}
}

export default Home;