import React from 'react';
import { Provider } from "react-redux";

import { Route, Redirect } from 'react-router-dom';


import UserContext from "../../privateRoute/UserContext";
import SignInForm from "./SignInForm";

// Store
import store from './../../store/Store';

class SignIn extends React.Component{
  
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
                            <SignInForm/>
                        </Provider>
                    )
                } />
            }}
            
        </UserContext.Consumer>;
    }
}

export default SignIn;