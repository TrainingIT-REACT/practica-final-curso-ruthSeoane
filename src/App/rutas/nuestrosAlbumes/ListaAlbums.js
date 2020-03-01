
import React from 'react';
import { NavLink } from "react-router-dom";

//CSS
import './NuestrosAlbumes.css';


const ListaAlbums = ({ albums }) => {
    return (
        <ul className="albumList">
          {albums.map(album =>   
            <li key={album.id} className="albumItem">
              <img src={album.cover} alt="Portada"/>
              <div className = "datos">
                <NavLink className ="nombreAlbum" to={"/albumes/"+album.id} key={album.id}>{album.name}</NavLink>
                <div>{album.artist}</div>
              </div>
              <hr/>
            </li>)}
      </ul>
    )
  }
  

export default ListaAlbums;