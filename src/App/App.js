import React, { Component } from 'react';

//Mis componentes
import Loader from './Loader/Loader';

// Css
import './App.css';
import './navBar/NavBar.css';

//Lazy
const NavBar = React.lazy(()=>import('./navBar/NavBar'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <div className="App">
        <React.Suspense fallback ={<Loader/>}>
        <NavBar/>        
          { this.state.loading ?
            <p>Cargando...</p>
            : <ul>
              {this.state.albums.map(album => <li key={album.id}>{album.name}</li>)}
            </ul>
          }
        </React.Suspense>
      </div>
    );
  }
}

export default App;
