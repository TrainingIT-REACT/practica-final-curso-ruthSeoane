import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { getBestAlbums } from '../../store/actions/AlbumActions';

//Componentes
import ListaMusicaRecomendada from './ListaMusicaRecomendada';

class MusicaRecomendada extends Component{
    
  componentDidMount() {
    this.props.getBestAlbums();  
  }

  renderAlbums(){
    const { isLoading, error, bestAlbums } = this.props.AlbumsReducer;
    
    if (isLoading){
      return <p>Cargando... </p>
    }else if(error){
      return <p>Hubo un error al obtener los datos</p>
    }else{
      return <ListaMusicaRecomendada albums={bestAlbums}/>
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
)(MusicaRecomendada);