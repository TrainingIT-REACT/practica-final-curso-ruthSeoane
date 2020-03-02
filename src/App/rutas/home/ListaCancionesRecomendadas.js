
import React from 'react';
import { NavLink } from "react-router-dom";

//CSS
import './Home.css'

class ListaCancionesRecomendadas extends React.Component {


    render(){
        
        let songs=this.props.canciones.map((cancion, i)=>{
            return <div className="infoCanciones" key={i}>
          
                    <div className="nombreCancion">
                        <i><NavLink className ="" to={"/albumes/"+cancion.album_id} key={cancion.id}>{cancion.name}</NavLink></i>
                    </div>
                    ({ 
                        Math.floor(cancion.seconds / 60) +
                        ":"+
                        Math.floor(cancion.seconds%60)
                    })
        
            </div>
        });

        return (
            <div className = "mejoresCanciones">
                <h2>Hoy te recomendamos estas canciones: </h2>
                
                <div className="canciones">
                    {songs}
                </div>
                
        </div>
        )
    }                               
  }
  

export default ListaCancionesRecomendadas;