
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

//Componentes
import AlbumConcreto from './../albumConcreto/AlbumConcreto';
import PrivateRoute from './../../privateRoute/PrivateRoute';

//CSS
import './NuestrosAlbumes.css';


const ListaAlbums = ({ albums }) => {
    return (
        <ul className="albumList">
          {albums.map(album =>   
            <li key={album.id} className="albumItem">
              <img src={album.cover} alt="Portada"/>
              <Router>
              <div className = "datos">
                <NavLink className ="nombreAlbum" to={"/albumes/"+album.id}>{album.name}</NavLink>
                <div>{album.artist}</div>
              </div>
              <PrivateRoute exact path={"/albumes/"+album.id} component={AlbumConcreto}/>
              </Router>
              <hr/>
            </li>)}
      </ul>
    )
  }
  

export default ListaAlbums;