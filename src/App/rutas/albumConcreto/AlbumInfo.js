import React, { Component } from 'react';
import { connect } from 'react-redux';


//Actions
import { getAlbumById, getSongsByAlbum } from '../../store/actions/AlbumActions';

import AlbumInfoList from './AlbumInfoList';


class AlbumInfo extends Component{

  constructor(props){
    super(props);
    this.props.getAlbumById(this.props.id);
    this.props.getSongsByAlbum(this.props.id);
  }

  // componentDidMount() {
  //   this.props.getAlbumById(this.props.id);
  //   this.props.getSongsByAlbum(this.props.id);
  // }

  renderAlbums(){
    const { isLoading, error, albumActual, cancionesAlbumActual } = this.props.AlbumsReducer;

    
    if (isLoading){
      return <p>Cargando... </p>
    }else if(error){
      return <p>Hubo un error al obtener los datos</p>
    }else{
        
      return (
        <div>

          <p>No es nulo</p>
          
          <AlbumInfoList albums={albumActual}/>
      </div>

      );
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
  getAlbumById: (id) => dispatch(getAlbumById(id)),
    getSongsByAlbum: (id) => dispatch(getSongsByAlbum(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumInfo);