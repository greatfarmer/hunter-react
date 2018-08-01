import React, { Component, Fragment } from 'react';

class HuntingInfo extends Component {
  state = {
    editing: false,
    name: '',
    contents: '',
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  handleToggleEdit = () => {
    const { info, onUpdate } = this.props;

    if(this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        contents: this.state.contents
      });
    }else {
      this.setState({
        name: info.name,
        contents: info.contents
      })
    }

    this.setState({
      editing: !this.state.editing
    })
  }

  hnadleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { name, contents } = this.props.info;
    const { editing } = this.state;
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    }
    return (
      <div style={style}>
        {
          editing ? (
            <Fragment>
              <input
                name="name"
                onChange={this.hnadleChange}
                value={this.state.name}
              />
              <input
                name="contents"
                onChange={this.hnadleChange}
                value={this.state.contents}
              />
            </Fragment>
          ) : (
            <Fragment>
              <div><b>{name}</b></div>
              <div>{contents}</div>
            </Fragment>
          )
        }
        <button onClick={this.handleRemove}>삭제</button>
        <button onClick={this.handleToggleEdit}>
          {
            editing ? '적용' : '수정'
          }
        </button>
      </div>
    );
  }
}

export default HuntingInfo;