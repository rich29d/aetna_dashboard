import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../assets/style/notification.css';

class Notification extends Component {  
  render() {    
    const {
      show = false,
      icon = '',
      text = [],
      type = '',
    } = this.props.notification || {};

    const className = show ? 'Show' : '';
    const fonticon = icon ? <i className={`fas fa-${icon}`}></i> : '';

    const first3Texts = text.slice(0, 3);

    const cards = first3Texts.map((message, index) =>
      <div style={{animationDelay: `.${index}s`}} className={`Notification ${className} ${type} Flex Middle`}>
        {fonticon} {message}
      </div>);
    
    return (<div className="Box__Notifications">{ cards }</div>);
  }
}

const mapStateToProps = store => {
  const {
    show = false,
    icon = '',
    text = '',
    type = '',
  } = store.rootReducer.notification || {};
  
  return {
    notification: {
      show,
      icon,
      text,
      type,
    }
  }
};

export default connect(mapStateToProps)(Notification);
