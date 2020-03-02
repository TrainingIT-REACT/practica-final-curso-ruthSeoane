import React from 'react';
import { connect } from 'react-redux';

//Context 
import UserContext from "../../privateRoute/UserContext";

// Action creators
import { addHistorico } from '../../store/actions/UserAction';

class ReproducirCancion extends React.Component{

    render(){
        return( 
                <UserContext.Consumer>
                  {({  updateCancionActual, updateReproduciendo }) => {
                      return(
                            <button onClick={() => {updateCancionActual(this.props.cancionActualizar); this.props.addHistorico(this.props.cancionActualizar); updateReproduciendo(true)}}>                   
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                </svg>
                            </button>            
                      )
              }}
              </UserContext.Consumer>)
    }
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = (dispatch) => ({
    addHistorico: (cancion) => dispatch(addHistorico(cancion)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReproducirCancion);
