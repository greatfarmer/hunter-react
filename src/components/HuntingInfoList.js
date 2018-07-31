import React, { Component } from 'react';
import HuntingInfo from './HuntingInfo';

class HuntingInfoList extends Component {
  render() {
    const { data } = this.props;
    const list = data.map(
      info => (
        <HuntingInfo
          info={info}
          key={info.id}
        />
      )
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default HuntingInfoList;