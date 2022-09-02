import React, { Component } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AppContext } from '../api';

import { App } from './UIApp';

import { UIHeader } from '../components/header/UIHeader';

export class UIPages extends Component {
  appContext: AppContext;

  constructor(props: any) {
    super(props);
    this.appContext = new AppContext(this);
  }

  render() {
    const theme = createTheme();

    const sections = [
      { title: 'Home', url: '#' },
      { title: 'Blog', url: '#' },
      { title: 'Project', url: '#' },
      { title: 'About', url: '#' }
    ];

    let event = this.appContext.consumeEvent();

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <UIHeader sections={sections} title={'SHDSVN'} />
          <main>
            <App appContext={this.appContext} event={event} />
          </main>
        </Container>
      </ThemeProvider>
    );
  }
}
