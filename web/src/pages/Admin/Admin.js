import React, { Component } from 'react';
import './Admin.scss';

export default class Admin extends Component {
  static displayName = 'Admin';

  render() {
    return (
      <h1 className='admin'>
        Egg #3 - Nice find.
      </h1>
    );
  }
}
