import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { getBestAlbums } from '../../store/actions/AlbumActions';

//Componentes
import ListaAlbumesRecomendados from './ListaAlbumesRecomendados';

class AlbumesRecomendados extends Component{
    
  componentDidMount() {
    this.props.getBestAlbums();  
  }

  renderAlbums(){
    const { isLoading, error, bestAlbums } = this.props.AlbumsReducer;
    
    if (isLoading){
      return <p>Cargando... </p>
    }else if(error){
      return <p>Hubo un error al obtener los albumes recomendados</p>
    }else{
      return <ListaAlbumesRecomendados albums={bestAlbums}/>
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
    getBestAlbums: () => dispatch(getBestAlbums()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumesRecomendados);