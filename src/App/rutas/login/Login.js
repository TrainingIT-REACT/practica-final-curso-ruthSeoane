import React from 'react';

import { Route, Redirect } from 'react-router-dom';


import UserContext from "../../privateRoute/UserContext";


class Login extends React.Component{
    constructor(props){

        super(props);

        //Referencias
        this.inputName = React.createRef();

    }



    componentDidMount() {
        document.getElementById("botonOrigen").classList.add("active");  
      };


    componentWillUnmount(){
    document.getElementById("botonOrigen").classList.remove("active")   
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

                        <div className="contentForm">
                            <div className="form">
                            <label htmlFor="name">Nombre</label>
                            <input id="name" type="text" ref={this.inputName}/>
                                <button onClick={() => {updateUser(true, this.inputName.current.value)}}>Entrar</button>
                            </div>
                        </div>
                    )
                } />
            }}
        </UserContext.Consumer>;
    }
}

export default Login;