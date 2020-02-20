import React from 'react';
import { connect } from "react-redux";

// Action creators
import { updateName, updateMail, updatePass } from '../../store/actions/UserAction';
import UserContext from "../../privateRoute/UserContext";


class Update extends React.Component {

    constructor(props){
        super(props);

        // this.onSubmit = this.onSubmit.bind(this);
        this.aux = this.aux.bind(this);

        this.inputName = React.createRef();
        this.inputMail = React.createRef();
        this.inputPass = React.createRef();
    }



//   onSubmit = (e) => {
//     // e.preventDefault();
//     updateName(this.inputName.current.value);
//     this.inputName.current.value = '';
    
//     updateMail(this.inputMail.current.value);
//     this.inputMail.current.value = '';

//     updatePass(this.inputPass.current.value);
//     this.inputPass.current.value = '';
//     console.log("Entro");
//   }

  aux(nombre, mail, pass){


    updateName(nombre);
    // this.inputName.current.value = '';
    
    updateMail(mail);
    // this.inputMail.current.value = '';

    updatePass(pass);
    // this.inputPass.current.value = '';
    console.log("Entro");

    return (<UserContext.Consumer>
        {({ updateUser }) => {
            return (
                updateUser(true, nombre)
                )}
    }</UserContext.Consumer>)

  }

  render () {
      return(
          
        
      <div >
          <label htmlFor="name">Nombre:</label>
          <input id="name" type="text" ref={this.inputName} />

          <label htmlFor="mail">Mail:</label>
          <input id="mail" type="text" ref={this.inputMail} />

          <label htmlFor="pass">Pass:</label>
          <input id="pass" type="password" ref={this.inputPass} />

          <button onClick={() => {this.aux(this.inputName.current.value, this.inputMail.current.value, this.inputPass.current.value)}}>Entrar</button>
      </div>)}

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
