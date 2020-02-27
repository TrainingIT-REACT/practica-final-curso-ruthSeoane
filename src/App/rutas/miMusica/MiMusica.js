import React from 'react';
import { Provider } from "react-redux";

import Albums from "./Albums";

// Store
import store from './../../store/Store';

class MiMusica extends React.Component{

    render(){
        return (
            <Albums/>

        )
    }
}

export default MiMusica;