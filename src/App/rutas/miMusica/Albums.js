import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { getAlbums } from '../../store/actions/AlbumActions';

//CSS
import './MiMusica.css';

class Albums extends Component{
    
  componentDidMount() {
    this.props.getAlbums();
  }

  renderAlbums(){
    const { isLoading, error, albums } = this.props.AlbumReducer;
    
    if (isLoading){
      return <p>Cargando... </p>
    }else if(error){
      return <p>Hubo un error al obtener los datos</p>
    }else{
      return (
      <ul>
          {albums.map(album => <li key={album.id}>{album.name}</li>)}
      </ul>)
    }
  
  
  }
    
  render(){
      return(
          <div>
            <p>Albumes:</p>
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