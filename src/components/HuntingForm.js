import React, { Component } from 'react';

class HuntingForm extends Component {
  state = {
    name: '',
    contents: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault(); // onSubmit() 시 refresh되는 것을 취소
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      contents: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          name="contents"
          placeholder="내용"
          onChange={this.handleChange}
          value={this.state.contents}
        />
        <button>등록</button>
      </form>
    );
  }
}

export default HuntingForm;