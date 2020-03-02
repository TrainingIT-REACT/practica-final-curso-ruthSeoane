import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

// Action creators
import { addHistoricoAlbumes } from '../../store/actions/UserAction';

class AlbumName extends React.Component{

    render(){
        return(          
                              
            <NavLink onClick={() => this.props.addHistoricoAlbumes(this.props.album)} className ="nombreAlbum" to={"/albumes/"+this.props.album.id}>{this.props.album.name}</NavLink>
            
        )           
    }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    addHistoricoAlbumes: (album) => dispatch(addHistoricoAlbumes(album)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumName);