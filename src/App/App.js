import React, { Component } from 'react';

//Mis componentes
import Loader from './Loader/Loader';

// Css
import './App.css';
import './navBar/NavBar.css'; 

//Contexto
import UserContext from './privateRoute/UserContext'

//Lazy
const NavBar = React.lazy(()=>import('./navBar/NavBar'));
const BarraReproduccion = React.lazy(()=>import('./barraReproduccion/BarraReproduccion'));

class App extends Component {
  constructor(props){
    super(props);
    this.updateUser = this.updateUser.bind(this);
    this.updateCancionActual = this.updateCancionActual.bind(this);

      this.state = {
      signedIn: false,
      username: "",
      cancionActual:"",
      updateUser: this.updateUser,
      updateCancionActual: this.updateCancionActual,
      generarDropdown: this.generarDropdown,
    }
  }

 
  updateUser(signedIn, username){
    this.setState(()=>({signedIn}));
    this.setState(()=>({username}));
  }

  updateCancionActual(cancionActual){
    this.setState(()=>({cancionActual}));
  }


  render() {
    return (
      <div className="App">
          <React.Suspense fallback ={<Loader/>}>
          <UserContext.Provider value={this.state}>
            <NavBar/>
            <BarraReproduccion/>
            </UserContext.Provider>       
          </React.Suspense>
      </div>
    );
  }
}

export default App;
