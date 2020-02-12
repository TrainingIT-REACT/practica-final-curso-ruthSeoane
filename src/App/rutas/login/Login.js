import React from 'react';

import { Route, Redirect } from 'react-router-dom';


import UserContext from "../../privateRoute/UserContext";

class Login extends React.Component{
    render(){
        return <UserContext.Consumer>
            {({ signedIn, updateUser }) => {
                return <Route render={(props) =>
                    signedIn ? (
                        <Redirect to="/" />
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