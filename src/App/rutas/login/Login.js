import React from 'react';
import { Provider } from "react-redux";

import { Route, Redirect } from 'react-router-dom';


import UserContext from "../../privateRoute/UserContext";
import LogInForm from "./LogInForm";

// Store
import store from './../../store/Store';

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
                            pathname: "/albumes", 
                            state: { message: '' } 
                        }} /> 
                    ) : (
                        <Provider store={store}>
                            <LogInForm/>
                        </Provider>
                    )
                } />
            }}
            
        </UserContext.Consumer>;
    }
}

export default Login;