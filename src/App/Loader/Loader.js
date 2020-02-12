import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

//CSS
import './Loader.css';

class Loader extends Component{

    render() {
        return(
            <div className="loader">
                <h1>Cargando...</h1>
                <CircularProgress/>
            </div>
        )}

}

export default Loader;

