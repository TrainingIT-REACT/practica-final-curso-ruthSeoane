import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

import './NavBar.css'

import UserContext from "../privateRoute/UserContext";

class DropdowContent extends Component{


    render(){
        return <UserContext.Consumer>
        {({ signedIn, updateUser }) => {
            return <Route render={(props) =>
                signedIn ? (
                    <div className="dropdown-content">
                <NavLink to="/perfil">Perfil</NavLink>
                <NavLink to="/historial">Historial</NavLink>
                <NavLink to="/logout" onClick={() => updateUser(false, "")}>Log out</NavLink>
            </div>
                ) : (
                    <div className="dropdown-content">
                <NavLink to="/login">Log in</NavLink>
                <NavLink to="/login">Sign in</NavLink>
            </div>
                )
            } />
        }}
    </UserContext.Consumer>;
    }
}

export default DropdowContent;