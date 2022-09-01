import React, { Component } from 'react';

import { Rest } from '../server/rest';

export class AppEvent {
  name: string;
  data: any;
  uiSource: Component;

  constructor(name: string, data: any, uiSource: Component) {
    this.name = name;
    this.data = data;
    this.uiSource = uiSource;
  }
}

export class AppContext {
  event: AppEvent | null = null;
  uiApp: Component;
  rest: Rest;

  constructor(uiApp: Component) {
    this.uiApp = uiApp;
    this.rest = new Rest('http://localhost:7080', 'http://localhost:7080/rest');
  }

  getRest() {
    return this.rest;
  }

  consumeEvent() {
    let event = this.event;
    this.event = null;
    return event;
  }

  broadcast(event: AppEvent) {
    this.event = event;
    this.uiApp.forceUpdate();
  }
}

export interface AppContextProps {
  appContext: AppContext;
  event: AppEvent | null;
}

export class ApplicationPlugin {
  category: string = '';
  name: string = '';
  label: string = '';
  key: string = '';

  constructor(category: string, name: string) {
    this.category = category;
    this.name = name;
    this.label = name;
    this.key = category + ':' + name;
  }

  createUI(_appContext: AppContext) {
    return <div>You need to override this method</div>;
  }
}
