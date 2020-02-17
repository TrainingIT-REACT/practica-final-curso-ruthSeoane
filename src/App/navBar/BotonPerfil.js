import React, { Component } from 'react';

import './NavBar.css'

import UserContext from "../privateRoute/UserContext";

class BotonPerfil extends Component{


    render(){
        return <UserContext.Consumer>
        {({ signedIn, username }) => {
            return (
                signedIn ? (
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{username}
                    {console.log(username)}
                    </div>            
                ) : (
                    
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mi perfil</div>
                )
            )
        }}
    </UserContext.Consumer>;
    }
}

export default BotonPerfil;