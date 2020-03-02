import React from 'react';

import './AlbumConcreto.css';

import ReproducirCancion from './ReproducirCancion';


class AlbumInfo extends React.Component{

  constructor(props) {
    super(props);
    
    this.albumSeconds=0;
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

    let songs=this.props.canciones.map((cancion, i)=>{
      this.albumSeconds += cancion.seconds;
      return <div className="cancionItem" key={i}>
        <div className="datosCanciones">
          <div><i>{cancion.album}</i> {cancion.name} ({this.calcularTiempo(cancion.seconds)})</div>
                <ReproducirCancion cancionActualizar={cancion}/>
        </div>
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

        Minutos totales: {this.calcularTiempo(this.albumSeconds)}
      </div>
    )
  }
}

export default AlbumInfo;