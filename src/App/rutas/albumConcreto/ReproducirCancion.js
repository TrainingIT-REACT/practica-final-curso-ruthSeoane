import React from 'react';
import { connect } from 'react-redux';

//Context 
import UserContext from "../../privateRoute/UserContext";

// Action creators
import { addHistorico } from '../../store/actions/UserAction';

class ReproducirCancion extends React.Component{

    render(){
        return(
            <div>    
                <UserContext.Consumer>
                  {({  updateCancionActual }) => {
                      return(
                          <div >
                              <button onClick={() => {updateCancionActual(this.props.cancionActualizar.name); this.props.addHistorico(this.props.cancionActualizar);}}>Reproducir</button>
                          </div> 
                      )
              }}
              </UserContext.Consumer>
            </div>)
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
