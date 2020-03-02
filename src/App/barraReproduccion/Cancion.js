import React from 'react';

import UserContext from "../privateRoute/UserContext";


const ReproducirCancion = () => {

  return (
      <div>
          
          <UserContext.Consumer>
          {({  cancionActual }) => {
            return(<div>{cancionActual.name}
              </div> )
          }}
        </UserContext.Consumer>
      </div>)

}


export default ReproducirCancion;