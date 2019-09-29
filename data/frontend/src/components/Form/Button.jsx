import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onClickEvent(true);
  }

  render() {
    const {
      className = '',
      text = '',
      icon,
      loading
    } = this.props;

    const fonticon = icon ? <i class={`fas fa-${icon}`}></i> : '';
    const classLoading = loading ? 'loading' : ''

    return (
      <div className={`Button ${className}`}>
        <button type="text" className={classLoading} onClick={this.handleChange}>{text} {fonticon}</button>
      </div>
    );
  }
}

export default Button;
