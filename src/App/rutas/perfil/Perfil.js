import React from 'react';
import { Provider } from "react-redux";

import store from './../../store/Store';

class Perfil extends React.Component{

    componentDidMount() {
        document.getElementById("botonOrigen").classList.add("active");  
      };


    componentWillUnmount(){
    document.getElementById("botonOrigen").classList.remove("active")   
    }

    render(){
        return(
                <Provider store={store}>
                    <p>{store.getState().name}</p>
                    {console.log(store.getState())}
                    {console.log("algo")}
                </Provider>

        )
    }
}

export default Perfil;