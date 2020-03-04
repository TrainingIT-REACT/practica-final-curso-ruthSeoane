import React from 'react';
import { connect } from "react-redux";

// Action creators
import { updateName, updateMail, updatePass } from '../../store/actions/UserAction';


import UserContext from "../../privateRoute/UserContext";


const Update = ({ updateName, updateMail, updatePass }) => {
  const inputName = React.createRef();
  const inputMail = React.createRef();
  const inputPass = React.createRef();

  const onSubmit = (name, mail, pass) => {
    if (typeof updateName === 'function')
    updateName(name); 
    if (typeof updateMail === 'function')
    updateMail(mail);
    if (typeof updatePass === 'function')
    updatePass(pass);
  } 

  return (
      <div>
          <label htmlFor="name">Nombre:</label>
          <input id="name" type="text" ref={inputName} required />

          <label htmlFor="mail">Mail:</label>
          <input id="mail" type="text" ref={inputMail} required/>

          <label htmlFor="pass">Pass:</label>
          <input id="pass" type="password" ref={inputPass} required />
          <UserContext.Consumer>
        {({  updateUser }) => {
          return(<button id="submit" onClick={() => {onSubmit(inputName.current.value, inputMail.current.value, inputPass.current.value); updateUser(true, inputName.current.value);}}>Entrar</button>)
        }}
        </UserContext.Consumer>
      </div>)

}


const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
  updateMail: (mail) => dispatch(updateMail(mail)),
  updatePass: (pass) => dispatch(updatePass(pass)),
});
  
const mapStateToProps = (state) => {
  return {
    name: state.name,
    mail: state.mail,
    pass: state.pass
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Update);
