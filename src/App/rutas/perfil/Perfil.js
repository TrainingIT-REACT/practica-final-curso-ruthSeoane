import React from 'react';

class Perfil extends React.Component{

    componentDidMount() {
        document.getElementById("botonOrigen").classList.add("active");  
      };


    componentWillUnmount(){
    document.getElementById("botonOrigen").classList.remove("active")   
    }

    render(){
        return(
            <div>
                <h1>NOMBRE APELLIDO APELLIDO</h1>
                <p>Dictumst ultricies, phasellus hendrerit diam a mi himenaeos porta? Magna accumsan nulla, porta erat tincidunt. Odio lobortis scelerisque sociis sociosqu a integer, mattis porttitor tristique senectus montes mi. Taciti convallis accumsan ut pharetra eleifend pellentesque! Nullam mollis cursus facilisi. Sociis congue massa nostra nec. Posuere, at viverra sollicitudin tempor sociosqu tortor! Nascetur tempor aliquam.</p>

<p>Nisl lorem eros mi platea placerat ridiculus torquent, suscipit nullam. Curabitur porttitor phasellus cras a, potenti fermentum mi phasellus ante fermentum cras. Lectus rhoncus taciti sollicitudin congue ut lectus! Facilisis et sapien eleifend massa odio duis facilisi? Nisi tincidunt odio nec in himenaeos sagittis eros litora mauris quam aenean dui. Libero nibh per orci. Elit lobortis est et placerat interdum ullamcorper erat diam. Leo imperdiet morbi montes at montes. Scelerisque mattis est himenaeos penatibus sit facilisi fusce risus. Ornare porta!</p>
            </div>
        )
    }
}

export default Perfil;