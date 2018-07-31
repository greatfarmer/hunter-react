import React, { Component } from 'react';

class HuntingInfo extends Component {
  state = {
    name: '',
    contents: '',
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
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
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default HuntingInfo;