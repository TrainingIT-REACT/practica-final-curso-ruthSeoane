import React from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// Action creators
import { updateName, updatePass } from '../../store/actions/UserAction';

//Contexto
import UserContext from "../../privateRoute/UserContext";

//CSS
import './Login.css'


const LogInForm = ({ updateName, updateMail, updatePass }) => {
  const inputName = React.createRef();
  const inputPass = React.createRef();

  const onSubmit = (name, pass) => {
    if (typeof updateName === 'function')
    updateName(name); 
    if (typeof updatePass === 'function')
    updatePass(pass);
  } 

  return (
    <div className="formulario">
      <h1>Iniciar sesi&oacute;n</h1>
      <div className="grupo">
        <label className="etiqueta" htmlFor="name">Nombre usuario:</label>
        <input id="name" type="text" ref={inputName} required />
      </div>

      <div className="grupo">
        <label className="etiqueta" htmlFor="pass">Contraseña:</label>
        <input id="pass" type="password" ref={inputPass} required />
      </div>
      <UserContext.Consumer>
        {({  updateUser }) => {
          return(<button className="botonSubmit" id="submit" onClick={() => {onSubmit(inputName.current.value, inputPass.current.value); updateUser(true, inputName.current.value);}}>Entrar</button>)
        }}
      </UserContext.Consumer>

      <div className="textoPequenhito">
        ¿No tienes usuario?&nbsp;
        <NavLink className="link" to="/signIn">Cr&eacute;alo</NavLink>
      </div>

    </div>)

}


const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
  updatePass: (pass) => dispatch(updatePass(pass)),
});
  
const mapStateToProps = (state) => {
  return {
    name: state.name,
    pass: state.pass
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogInForm);
