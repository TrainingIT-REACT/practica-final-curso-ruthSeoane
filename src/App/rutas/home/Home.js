import React, { Component } from 'react';
import { Provider } from "react-redux";

//Store
import store from './../../store/Store';

//Componentes
import MusicaRecomendada from './MusicaRecomendada';

class Home extends Component{

    render(){
    
        return (
            <div>
                <Provider store={store}>
                    <MusicaRecomendada/>
                </Provider>
            </div>
        )}
}

export default Home;