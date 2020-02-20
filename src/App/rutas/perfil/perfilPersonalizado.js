import React from 'react';
import { connect } from 'react-redux';

const UpName = ( {name}) => {
  return <section>
    <label>{ name != null && name !== '' ? ('Hola ' + name + ' !') : 'Regístrate' }</label>
    
  </section>;
}

const mapStateToProps = (state/*, otherProps */) => {
  return {
    name: state.name
  }
}



export default connect(
  mapStateToProps
)(UpName);