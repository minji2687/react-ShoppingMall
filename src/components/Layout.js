import React, { Component } from 'react';

import Header from '../containers/Header';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        {this.props.children}
        <div>저작권은 조민지에게 있습니다.</div>
      </div>
    );
  }
}
