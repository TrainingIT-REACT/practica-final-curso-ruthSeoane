import React, { Component } from 'react';

//Mis componentes
import Loader from './Loader/Loader';

// Css
import './App.css';
import './navBar/NavBar.css';



//Lazy
const NavBar = React.lazy(()=>import('./navBar/NavBar'));

class App extends Component {

  render() {
    return (
      <div className="App">
          <React.Suspense fallback ={<Loader/>}>
          <NavBar/>        
          </React.Suspense>
      </div>
    );
  }
}

export default App;
