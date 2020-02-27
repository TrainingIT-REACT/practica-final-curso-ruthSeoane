import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Provider } from "react-redux";

//Mis componentes
import UserContext from '../privateRoute/UserContext';
import PrivateRoute from './../privateRoute/PrivateRoute';
import DropdowContent from './DropdowContent';
import BotonPerfil from './BotonPerfil';

//Mis paginas
import Login from './../rutas/login/Login';
import Perfil from './../rutas/perfil/Perfil';
import Adios from './../rutas/adios/Adios';
import NuestrosAlbumes from '../rutas/nuestrosAlbumes/NuestrosAlbumes';
import Home from '../rutas/home/Home';

// Css
import './NavBar.css';

// Store
import store from './../store/Store';

class NavBar extends Component{

  constructor(props){
    super(props);
    this.updateUser = this.updateUser.bind(this);

      this.state = {
      signedIn: false,
      username: "",
      updateUser: this.updateUser,
      generarDropdown: this.generarDropdown,
    }
  }

 
  updateUser(signedIn, username){
    this.setState(()=>({signedIn}));
    this.setState(()=>({username}));
  }

  render(){
    
    return (    
        <Router>
          <UserContext.Provider value={this.state}>
          <Provider store={store}> 
            <div className="App container">
              <div className="navBar">
                <NavLink exact activeClassName="active" to="/" className="elemento">Inicio</NavLink>
                <NavLink activeClassName="active" to="/albumes" className="elemento">Nuestros &aacute;lbumes</NavLink>

                  <div className="dropdown elemento" id = "botonOrigen">
                    <div className = "perfil">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>                    
                      {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mi perfil */}
                      <BotonPerfil/>
                    </div>              
                      <DropdowContent/>
                  </div> 
              </div>
              <Route path="/" exact component={Home}/>
              <PrivateRoute exact path="/albumes" component={NuestrosAlbumes}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/perfil" component={Perfil}/>
              <Route path="/logout" component={Adios}/>
            </div>
            </Provider>
          </UserContext.Provider>
        </Router>
    )

  }
}

export default NavBar;