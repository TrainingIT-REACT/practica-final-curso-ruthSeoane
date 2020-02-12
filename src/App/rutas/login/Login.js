import React from 'react';

import { Route, Redirect } from 'react-router-dom';


import UserContext from "../../privateRoute/UserContext";

class Login extends React.Component{

    componentDidMount() {
        document.getElementById("botonOrigen").classList.add("active")
      }

      componentWillUnmount(){
        document.getElementById("botonOrigen").classList.remove("active")   
      }


    render(){
        return <UserContext.Consumer>
            {({ signedIn, updateUser }) => {
                return <Route render={(props) =>
                    signedIn ? (
                        // <Redirect to="/" />
                        <div className="form">
                                    <button onClick={() => updateUser(false)}>Salir</button>
                                </div>
                    ) : (
                        <div id="login">
                            <div className="contentForm">
                                <div className="form">
                                    <button onClick={() => updateUser(true)}>Entrar</button>
                                </div>
                            </div>
                        </div>
                    )
                } />
            }}
        </UserContext.Consumer>;
    }
}

export default Login;