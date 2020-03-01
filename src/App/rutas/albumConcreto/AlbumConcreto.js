import React from 'react';
import { connect } from 'react-redux';

//Otros componentes
import CancionesInfo from './CancionesInfo';

//Actions
import { getAlbumById, getSongsByAlbum } from '../../store/actions/AlbumActions';

class AlbumConcreto extends React.Component{

    componentDidMount(){
        this.props.getAlbumById(this.props.match.params.id);
        this.props.getSongsByAlbum(this.props.match.params.id);
    }

    render(){
        const { isLoadingAlbum, isLoadingSongs, error, albumActual, cancionesAlbumActual } = this.props.AlbumsReducer;

        if (isLoadingAlbum){
            return <p>Cargando informaci&oacute;n del &aacute;lbum...</p>
        }else if(isLoadingSongs){
            return <p>Cargando informaci&oacute;n de las canciones...</p>
        }else if(error){
            return <p>Se produjo un error inesperado</p>
        }else {             
            return( 
            <CancionesInfo canciones={cancionesAlbumActual}/>
            )
        }

    }



}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
  getAlbumById: (id) => dispatch(getAlbumById(id)),
  getSongsByAlbum: (id) => dispatch(getSongsByAlbum(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumConcreto);