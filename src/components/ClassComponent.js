import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'How are you!!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}


