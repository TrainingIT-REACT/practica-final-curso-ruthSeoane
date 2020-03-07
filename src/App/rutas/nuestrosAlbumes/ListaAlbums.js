
import React from 'react';
import { Provider } from "react-redux";

import store from './../../store/Store';
import AlbumName from './AlbumName';

//CSS
import './NuestrosAlbumes.css';


const ListaAlbums = ({ albums }) => {
    return (
        <ul className="albumList">
          <h1 className="izquierda">Nuestros &aacute;lbumes:</h1>
          {albums.map(album =>   
            <li key={album.id} className="albumItem">
              <img src={album.cover} alt="Portada"/>  
              <div className = "datos">
                <Provider store={store}>
                  <AlbumName album={album}/>
                </Provider>
                <div>{album.artist}</div>
              </div>
              <hr/>
            </li>)}
      </ul>
    )
  }
  

export default ListaAlbums;