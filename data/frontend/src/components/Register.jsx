import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleNotification } from "../share/actions";

import service from '../services/auth';
import Field from './Form/Field.jsx';
import Button from './Form/Button.jsx';

import '../assets/style/login.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      estado: '',
      email: 'rdsilva_richard@hotmail.com',
      senha: '123qwe',
      loading: false,
      itemNotificate: null,
    }
  }

  notification(options) {
    options.show = true;
    this.props.toggleNotification(options);

    clearTimeout(this.state.itemNotificate);

    const itemNotificate = setTimeout(() => {
      this.props.notification.show = false;
      this.props.toggleNotification(this.props.notification);
    }, 7000);

    this.setState({ itemNotificate });
  }

  setInfo(key, value) {
    this.setState({ [key]: value });
  }

  async register() {
    this.setState({ loading: true });
    const resp = await service.register(this.state);
    this.responseMessage(resp);
    this.setState({ loading: false });
    resp.success && setTimeout(() => window.location.assign('#/login'), 1000);
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
      loading,
    } = this.state;

    return (
      <div className='Width--12 Height__window--100 Width__window--100 Table__Cell Middle'>
        <div className='Login Width--11 Width__Max--4'>
          <img className='Margin__Bottom--25' src={require('../assets/images/logo.png')} alt="Logo" />

          <div className='Margin__Bottom--25 Width--12 Size--20'>Dados de cadastro</div>

          <Field className='Margin__Bottom--25' label={'Qual é seu nome?'} type={'text'}
            onTextChange={value => this.setInfo('nome', value)} icon={'user-circle'}></Field>

          <Field className='Margin__Bottom--25' label={'Em qual estado você mora?'} type={'text'}
            onTextChange={value => this.setInfo('estado', value)} icon={'map-marker-alt'}></Field>

          <Field className='Margin__Bottom--25' label={'Qual é seu email?'} type={'text'}
            onTextChange={value => this.setInfo('email', value)} icon={'envelope'}></Field>

          <Field className='Margin__Bottom--45' label={'Insira uma senha!'}
            subLabel={<span>Pense em algo com no mínimo <strong>6</strong> caracteres!</span>}
            type={'password'} onTextChange={value => this.setInfo('senha', value)} icon={'key'}></Field>

          <Field className='Margin__Bottom--45' label={'Repita a senha, por favor!'} type={'password'}
            onTextChange={value => this.setInfo('repitaSenha', value)} icon={'key'}></Field>

          <div className="Width--12 Flex Middle SpaceBetween">
            <a href="#/login">Já tenho uma conta.</a>
            <Button text='Cadastrar' loading={loading} onClickEvent={() => this.register()}></Button>
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
)(Register);
