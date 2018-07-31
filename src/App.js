import React, { Component } from 'react';
import HuntingForm from './components/HuntingForm';
import HuntingInfoList from './components/HuntingInfoList';

class App extends Component {
  id = 0;

  state = {
    information : []
  }

  handleCreate = (data) => {
    this.setState({
      information: this.state.information.concat({
        ...data,
        id: this.id++
      })
    });
  }

  render() {
    return (
      <div>
        <HuntingForm onCreate={this.handleCreate} />
        <HuntingInfoList data={this.state.information} />
      </div>
    )
  }
}

export default App;
