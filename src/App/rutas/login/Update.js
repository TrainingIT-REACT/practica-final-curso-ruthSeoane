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
    updateName(name);
    updateMail(mail);
    updatePass(pass);
    }

  return (
      <div>
          <label htmlFor="name">Nombre:</label>
          <input id="name" type="text" ref={inputName} />

          <label htmlFor="mail">Mail:</label>
          <input id="mail" type="text" ref={inputMail} />

          <label htmlFor="pass">Pass:</label>
          <input id="pass" type="password" ref={inputPass} />
          <UserContext.Consumer>
        {({  updateUser }) => {
          return(<button onClick={() => {onSubmit(inputName.current.value, inputMail.current.value, inputPass.current.value); updateUser(true);}}>Entrar</button>)
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