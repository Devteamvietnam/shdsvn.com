import React, { Component } from 'react';
import { AppContextProps } from '@/api';

import logo from '../assets/images/logo.svg';
import '../assets/scss/App.scss';

export class App extends Component<AppContextProps> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}
