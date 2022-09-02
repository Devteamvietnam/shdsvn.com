import React, { Component } from 'react';

import { AppContext } from '../api';

import { App } from './UIApp';

import { UIComponent } from '../components';

import 'bootstrap/dist/css/bootstrap.min.css';

export class UIPages extends Component {
  appContext: AppContext;

  constructor(props: any) {
    super(props);
    this.appContext = new AppContext(this);
  }

  render() {
    let event = this.appContext.consumeEvent();

    return (
      <div className="ui-application">
        <UIComponent />
        <App appContext={this.appContext} event={event} />
      </div>
    );
  }
}
