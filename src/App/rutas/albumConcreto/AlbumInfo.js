import React from 'react';

import './AlbumConcreto.css';


const secondsToMinutes = ({ time }) => {
  
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes);
  
  return minutes+":"+seconds;
  
}



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
              <div className = "datosCanciones">{cancion.name} ({
                  Math.floor(cancion.seconds / 60) +
                  ":"+
                  Math.floor(cancion.seconds - (Math.floor(cancion.seconds / 60))*60)
                })
              </div>
            </li>)}
        </ul>

      </div>
    )
  }
  

export default AlbumInfo;