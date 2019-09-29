import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleNotification } from "../share/actions";

import service from '../services/auth';
import Field from './Form/Field.jsx';
import Button from './Form/Button.jsx';

import '../assets/style/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      loading: false
    }
  }

  notification(options) {
    options.show = true;
    this.props.toggleNotification(options);

    setTimeout(() => {
      this.props.notification.show = false;    
      this.props.toggleNotification(this.props.notification);
    }, 5000);    
  }

  setEmail(email) {
    this.setState({ email });
  }

  setSenha(senha) {
    this.setState({ senha });
  }

  async logar(email, senha) {
    this.setState({ loading: true });
    const resp = await service.login(email, senha);
    this.responseMessage(resp);    
    this.setState({ loading: false });    
    resp.success && setTimeout(() => {
      window.location.assign('#/dashboard');
      window.location.reload();
    }, 3000);
  }

  responseMessage({ success, messages }) {
    if (!messages) {
      return;
    }
    
    const reaction = success ? `Legal!` : `Puxa!`;
    const reactionMessage = messages.map(
      message => `${reaction} ${message}`);
    
    this.notification({
      icon: success ? 'check' : 'exclamation-triangle',
      text: reactionMessage,
    });
  }

  render() {
    const {
      email,
      senha,
      loading,
    } = this.state;

    return (
      <div className='Width--12 Height__window--100 Width__window--100 Table__Cell Middle'>        
        <div className="Logo">
          <img src={require('../assets/images/logo.svg')} alt="Logo" />
        </div>
        <div className='Login Width--11 Width__Max--4 Margin__Auto'>
          <div className='Margin__Bottom--25 Width--12 Size--20'>Dados de acesso</div>
          
          <Field className='Margin__Bottom--25' label={'Email'} type={'text'} value={email}
            onTextChange={value => this.setEmail(value)} icon={'envelope'}></Field>
          
          <Field className='Margin__Bottom--45' label={'Senha'} type={'password'} value={senha}
            onTextChange={value => this.setSenha(value)} icon={'key'}></Field>
          
          <div className="Width--12 Flex Middle SpaceBetween">
            <a href="#/cadastro">Não tenho conta, e agora?</a>
            <Button text='Entrar' loading={loading} onClickEvent={() => this.logar(email, senha)}></Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  notification: store.rootReducer.notification
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleNotification }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
