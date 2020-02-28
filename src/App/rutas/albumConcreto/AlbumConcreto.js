import React from 'react';

import AlbumAux from './AlbumInfo';

class AlbumConcreto extends React.Component{

    render(){
        return( 
        <AlbumAux id={this.props.match.params.id}/>
        )
    }


}

export default AlbumConcreto;