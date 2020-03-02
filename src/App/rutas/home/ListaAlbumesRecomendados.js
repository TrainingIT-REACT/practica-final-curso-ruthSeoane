
import React from 'react';
import { NavLink } from "react-router-dom";

//CSS
import './Home.css'

class ListaAlbumesRecomendados extends React.Component {


    render(){
        
        let albumes=this.props.albums.map((album, i)=>{
            return <div className="infoAlbum" key={i}>
        
                <div className="portadaAlbum">    
                    <img src={album.cover} alt="Portada"/>
                </div>

                <div className="textoInfoAlbum">
                    <div className="nombreAlbum">
                        <i><NavLink className ="" to={"/albumes/"+album.id} key={album.id}>{album.name}</NavLink></i>
                    </div>
                    {album.artist}
                </div>

            </div>
        });

        return (
            <div className = "mejoresAlbumes">
                <h2>Hoy te recomendamos estos &aacute;lbumes: </h2>
                
                <div className="albumes">
                    {albumes}
                </div>
                
        </div>
        )
    }                               
  }
  

export default ListaAlbumesRecomendados;