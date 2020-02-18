import React from 'react';

import { Route, Redirect } from 'react-router-dom';


import UserContext from "../../privateRoute/UserContext";
import Update from "./Update";

class Login extends React.Component{
  
    componentDidMount() {
        document.getElementById("botonOrigen").classList.add("active");  
      };


    componentWillUnmount(){
    document.getElementById("botonOrigen").classList.remove("active")   
    }

    render(){
        return <UserContext.Consumer>
            {({ signedIn }) => {
                return <Route render={(props) =>
                    signedIn ? (
                        <Redirect to={{ 
                            pathname: "/mi_musica", 
                            state: { message: '' } 
                        }} /> 
                    ) : (

                        <div className="contentForm">
                            <div className="form">
                                <Update/>
                            </div>
                        </div>
                    )
                } />
            }}
            
        </UserContext.Consumer>;
    }
}

export default Login;