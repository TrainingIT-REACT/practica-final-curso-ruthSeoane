import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { getBestSongs } from '../../store/actions/AlbumActions';

//Componentes
import ListaCancionesRecomendadas from './ListaCancionesRecomendadas';

class CancionesRecomendadas extends Component{
    
  componentDidMount() {
    this.props.getBestSongs();  
  }

  renderAlbums(){
    const { isLoading, error, bestSongs } = this.props.AlbumsReducer;
    
    if (isLoading){
      return <p>Cargando canciones... </p>
    }else if(error){
      return <p>Hubo un error al obtener las canciones recomendadas</p>
    }else{
      return <ListaCancionesRecomendadas canciones={bestSongs}/>
    }
  }
    
  render(){
      return(
          <div>       
              { this.renderAlbums() }
          </div>
      )

  }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    getBestSongs: () => dispatch(getBestSongs()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CancionesRecomendadas);