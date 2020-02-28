import React, { Component } from 'react';
import { connect } from 'react-redux';

//Componentes
import ListaAlbums from './ListaAlbums'

//Actions
import { getAlbums } from '../../store/actions/AlbumActions';

//CSS
import './NuestrosAlbumes.css';

class Albums extends Component{
    
  componentDidMount() {
    this.props.getAlbums();  
  }

  renderAlbums(){
    const { isLoading, error, albums } = this.props.AlbumsReducer;
    
    if (isLoading){
      return <p>Cargando... </p>
    }else if(error){
      return <p>Hubo un error al obtener los datos</p>
    }else{
      return <ListaAlbums albums={albums}/>
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
  getAlbums: () => dispatch(getAlbums()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);