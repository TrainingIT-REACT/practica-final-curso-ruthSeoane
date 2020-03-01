import React from 'react';

import './AlbumConcreto.css';

const CancionesInfo = ({ canciones }) => {
  console.log("----------- CANCIONES: ")
  console.log(canciones);
    return (
        <ul className="cancionesList">
          {canciones.map(cancion =>   
            <li key={cancion.id} className="albumItem">
              <div className = "datos">
              <div>{cancion.name} </div>
          <div>{cancion.seconds}</div>
              </div>
            </li>)}
      </ul>
    )
  }
  

export default CancionesInfo;