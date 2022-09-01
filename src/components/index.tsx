import React, { Component } from 'react';

import { UIHeader } from '../components/header/UIHeader';
import { AppContext } from '../api';
import { App } from '../pages/App';

import 'bootstrap/dist/css/bootstrap.min.css';

export class UIComponent extends Component {
  appContext: AppContext;

  constructor(props: any) {
    super(props);
    this.appContext = new AppContext(this);
  }

  render() {
    let event = this.appContext.consumeEvent();

    return (
      <div className="ui-application">
        <UIHeader appContext={this.appContext} event={event} />
        <App appContext={this.appContext} event={event} />
      </div>
    );
  }
}
