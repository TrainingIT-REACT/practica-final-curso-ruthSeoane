import React, { Component } from 'react';
import { Provider } from "react-redux";

//Mis componentes
import Loader from './Loader/Loader';

// Css
import './App.css';
import './navBar/NavBar.css';

// Store
import store from './store/Store';

//Lazy
const NavBar = React.lazy(()=>import('./navBar/NavBar'));

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <React.Suspense fallback ={<Loader/>}>
          <NavBar/>        
          </React.Suspense>
        </Provider>
      </div>
    );
  }
}

export default App;
