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
        const { isLoading, error, albums, cancionesAlbumActual } = this.props.AlbumsReducer;

        if (isLoading){
            return <p>Cargando informaci&oacute;n...</p>
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