import React from 'react';

import './AlbumConcreto.css';

import ReproducirCancion from './ReproducirCancion';


class AlbumInfo extends React.Component{

  constructor(props) {
    super(props);
    
    
    this.calcularTiempo = this.calcularTiempo.bind(this);
  }

  calcularTiempo(seconds){

    return(
      Math.floor(seconds / 60) +
      ":"+
      seconds%60    
    )

  }

  render(){

    let albumSeconds=0;

    let songs=this.props.canciones.map((cancion, i)=>{
      albumSeconds += cancion.seconds;
      return <div className="cancionItem" key={i}>
             <div className="infoCancion"><i>{cancion.album}</i> {i+1}. {cancion.name} ({this.calcularTiempo(cancion.seconds)})
              <ReproducirCancion cancionActualizar={cancion}/> </div>
      </div>
  });

    return (
      <div className="xeral">
        <div className = "albumInfo"> 
          <div className="portada">   
            <img src={this.props.album.cover} alt="Portada"/>
          </div>   
          <div className = "datosAlbum"> 
            <h1>{this.props.album.name}</h1>
            <div className="artist">{this.props.album.artist}</div>
          </div>
        </div>
        
        <div className="cancionesList">
          {songs}
        </div>

        <div className="total">Minutos totales &rarr; {this.calcularTiempo(albumSeconds)}</div>
      </div>
    )
  }
}

export default AlbumInfo;