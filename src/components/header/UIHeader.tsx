import React, { Component } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import logo from '../../assets/images/logo.svg';

import '../header/style.scss';

interface HeaderProps {
  sections: Array<{
    title: string;
    url: string;
    description: string;
  }>;
  title: string;
}

export class UIHeader extends Component<HeaderProps> {
  render() {
    const { sections, title } = this.props;

    return (
      <React.Fragment>
        <AppBar position="relative">
          <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              mt={1}
              sx={{ flex: 1 }}
            >
              {title}
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              mt={1}
              sx={{ flex: 1 }}
            >
              <img src={logo} className="App-logo-header" alt="logo" />
            </Typography>
            <Button variant="outlined" size="small"></Button>
          </Toolbar>
          <Toolbar
            component="nav"
            variant="dense"
            sx={{ justifyContent: 'center', overflowX: 'auto' }}
          >
            {sections.map(section => (
              <Link
                color="inherit"
                rel="noopener"
                underline="none"
                key={section.title}
                variant="body1"
                href={section.url}
                sx={{ p: 2, flexShrink: 0 }}
              >
                {section.title}
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}
