import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
                <a onClick={() => updateUser(false)} class="pers">Log out</a>
            </div>
                ) : (
                    <div className="dropdown-content">
                <NavLink to="/perfil">Log in</NavLink>
                <NavLink to="/perfil">Sign in</NavLink>
            </div>
                )
            } />
        }}
    </UserContext.Consumer>;
    }
}

export default DropdowContent;