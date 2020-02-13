import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

//Mis componentes
import UserContext from '../privateRoute/UserContext';
import PrivateRoute from './../privateRoute/PrivateRoute';
import DropdowContent from './DropdowContent';

//Mis paginas
import Login from './../rutas/login/Login';
import Perfil from './../rutas/perfil/Perfil';
import Adios from './../rutas/adios/Adios';
import MiMusica from './../rutas/miMusica/MiMusica';

// Css
import './NavBar.css'

// Componente inicial
const Home = () => <p>Esta es la página principal.</p>;


class NavBar extends Component{

  constructor(props){
    super(props);
    this.updateUser = this.updateUser.bind(this);

      this.state = {
      signedIn: false,
      updateUser: this.updateUser,
      generarDropdown: this.generarDropdown,
    }
  }

 
  updateUser(signedIn){

    this.setState(()=>({signedIn}));

  }

  render(){
    
    return (    
        <Router>
          <UserContext.Provider value={this.state}>
            <div className="App container">
              <div className="navBar">
                <NavLink exact activeClassName="active" to="/" className="elemento">Inicio</NavLink>
                <NavLink activeClassName="active" to="/mi_musica" className="elemento">Mi m&uacute;sica</NavLink>

                  <div className="dropdown elemento" id = "botonOrigen">
                    <div className = "perfil">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>                    
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mi perfil
                    </div>              
                      <DropdowContent/>
                  </div> 
              </div>
              <Route path="/" exact component={Home}/>
              <PrivateRoute path="/mi_musica" component={MiMusica}/>
              <Route exact path="/login" component={Login}/>
              <Route path="/perfil" component={Perfil}/>
              <Route path="/logout" component={Adios}/>
            </div>
          </UserContext.Provider>
        </Router>
    )

  }
}

export default NavBar;