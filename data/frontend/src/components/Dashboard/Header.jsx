import React, { Component } from 'react';

import '../../assets/style/header.css';

class Header extends Component {
  render() {    
    return (
      <div className='Header Margin__Bottom--45'>
        <div className="Flex SpaceBetween MaxWidth">
          <img src={require('../../assets/images/logo.svg')} alt="Logo" />
          <div className="Header__Menu Flex SpaceBetween">
            <a href="#/dashboard">Meu consumo</a>
            <a href="#/dashboard">Minha área</a>
            <a href="#/dashboard">Perfil</a>
            <a href="#/dashboard">Dados Pessoais</a>
          </div>
        </div>        
      </div>
    );
  }
}

export default Header;
