import React from 'react';

import { Route, Redirect } from 'react-router-dom';


import UserContext from "../../privateRoute/UserContext";


class Login extends React.Component{
    constructor(props){

        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }



    componentDidMount() {
        document.getElementById("botonOrigen").classList.add("active");
 
             
            // console.log(this.props.location.state.message);

        
      };


    componentWillUnmount(){
    document.getElementById("botonOrigen").classList.remove("active")   
    }

    onSubmit(e){
        
    }

    render(){
        return <UserContext.Consumer>
            {({ signedIn, updateUser }) => {
                return <Route render={(props) =>
                    signedIn ? (
                        <Redirect to={{ 
                            pathname: "/mi_musica", 
                            state: { message: '' } 
                        }} /> 
                    ) : (
                        <div>
                            <form onSubmit={this.onSubmit} className="contentForm">
                                <div className="form">
                                    <button type="submit" onClick={() => {updateUser(true)}}>Entrar</button>
                                </div>
                            </form>
                        </div>
                    )
                } />
            }}
        </UserContext.Consumer>;
    }
}

export default Login;