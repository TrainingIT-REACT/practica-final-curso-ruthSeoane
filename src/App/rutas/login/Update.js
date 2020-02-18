import React from 'react';
import { connect } from "react-redux";

// Action creators
import { updateName, updateMail, updatePass } from '../../store/actions/UserAction';
import UserContext from "../../privateRoute/UserContext";


const Update = ({ updateName, updateMail, updatePass }) => {
  const inputName = React.createRef();
  const inputMail = React.createRef();
  const inputPass = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    updateName(inputName.current.value);
    inputName.current.value = '';
    
    updateMail(inputMail.current.value);
    inputMail.current.value = '';

    updatePass(inputPass.current.value);
    inputPass.current.value = '';
    console.log("Entro");
  }

  return (
<form onSubmit={onSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input id="name" type="text" ref={inputName} />

        <label htmlFor="mail">Mail:</label>
        <input id="mail" type="text" ref={inputMail} />

        <label htmlFor="pass">Pass:</label>
        <input id="pass" type="password" ref={inputPass} />

      <button type="submit">aqui</button>
        {/* <button onClick={() => {updateUser(true, inputName.current.value)}}>Entrar</button> */}
    </form>)

}


const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
  updateMail: (mail) => dispatch(updateMail(mail)),
  updatePass: (pass) => dispatch(updatePass(pass)),
});
  
export default connect(
  () => ({}),
  mapDispatchToProps,
)(Update);
