import React, { Component } from 'react';

class RegisterForm extends Component {
  state = {
    name: '',
    contents: '',
  }

  render() {
    return (
      <div>
        <h1>인정사냥꾼</h1>
        <div>
          <input
            name="name"
            placeholder="이름"
          />
          <input
            name="contents"
            placeholder="내용"
          />
          <button>입력</button>
        </div>
      </div>
    );
  }
}

export default RegisterForm;