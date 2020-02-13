import React, { Component } from 'react';

import './MiMusica.css';



class MiMusica extends Component{
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

    render(){
        return(
            <div>
            { this.state.loading ?
                <p>Cargando...</p>
                : <ul>
                  {this.state.albums.map(album => <li key={album.id}>{album.name}</li>)}
                </ul>
              }
            </div>
        )

    }
}

export default MiMusica;