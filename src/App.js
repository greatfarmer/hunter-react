import React, { Component } from 'react';
import HuntingForm from './components/HuntingForm';
import HuntingInfoList from './components/HuntingInfoList';

class App extends Component {
  id = 0;

  state = {
    information : []
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id) {
            return {
              ...data,
              id
            };
          }
          return info;
        }
      )
    });
  }

  render() {
    return (
      <div>
        <HuntingForm onCreate={this.handleCreate} />
        <HuntingInfoList
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default App;
