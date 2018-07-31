import React, { Component } from 'react';

class HuntingInfo extends Component {
  state = {
    name: '',
    contents: '',
  }

  render() {
    const { name, contents } = this.props.info;
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    }
    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{contents}</div>
      </div>
    );
  }
}

export default HuntingInfo;