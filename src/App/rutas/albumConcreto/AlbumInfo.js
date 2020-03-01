import React from 'react';

import './AlbumConcreto.css';

const AlbumInfo = ({ album, canciones }) => {

    return (
      <div className="xeral">
        
        <div className = "albumInfo"> 
          <div className="portada">   
            <img src={album.cover} alt="Portada"/>
          </div>   
          <div className = "datosAlbum"> 
            <h1>{album.name}</h1>
            <div className="artist">{album.artist}</div>
          </div>
        </div>
         
        <ul className="cancionesList">
          {canciones.map(cancion =>   
            <li key={cancion.id} className="cancionItem">
              <div className = "datosCanciones">
                <div>{cancion.name} </div>
                <div>{cancion.seconds}</div>
              </div>
            </li>)}
        </ul>

      </div>
    )
  }
  

export default AlbumInfo;