import React from 'react';
import { connect } from 'react-redux';

//Otros componentes
import AlbumInfo from './AlbumInfo';

//Actions
import { getSongsByAlbum } from '../../store/actions/AlbumActions';

class AlbumConcreto extends React.Component{

    componentDidMount(){
        this.props.getSongsByAlbum(this.props.match.params.id);
    }

    render(){
        const { isLoadingAlbum, isLoadingSongs, error, albums, cancionesAlbumActual } = this.props.AlbumsReducer;

        console.log(this.props);

        if (isLoadingAlbum){
            return <p>Cargando informaci&oacute;n del &aacute;lbum...</p>
        }else if(isLoadingSongs){
            return <p>Cargando informaci&oacute;n de las canciones...</p>
        }else if(error){
            return <p>Se produjo un error inesperado</p>
        }else {             
            return( 
            <AlbumInfo album = {albums[this.props.match.params.id - 1]} canciones={cancionesAlbumActual}/>
            )
        }

    }

}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  getSongsByAlbum: (id) => dispatch(getSongsByAlbum(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumConcreto);