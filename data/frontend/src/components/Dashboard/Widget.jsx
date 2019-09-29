import React, { Component } from 'react';
import '../../assets/style/widget.css';

import numeral from 'numeral';

class Widget extends Component {
  mountInfos(infos = []) {
    return infos.map(({ label, value }, index) =>
    (<div className="Widget__Info--item" key={index}>
      <label>{label}</label>
      <span>{numeral(value).format('0,0,0').replace(',','.')}</span>
    </div>))
  }
  
  render() {
    const {
      title = '',
      infos = '',
      index = 0,
    } = this.props;

    const infosHTML = this.mountInfos(infos);

    return (
      <div className={`Widget Widget__Background--${index}`}>
        <div className="Size--20 Margin__Bottom--25">{ title }</div>
        {infosHTML}
      </div>
    );
  }
}

export default Widget;
