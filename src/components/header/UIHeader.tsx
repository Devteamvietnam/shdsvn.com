import React, { Component } from 'react';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import logo from '../../assets/images/logo.svg';

import '../header/style.scss';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export class UIHeader extends Component<HeaderProps> {
  render() {
    const { sections, title } = this.props;

    return (
      <React.Fragment>
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
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
          {sections.map(section => (
            <Link
              color="primary"
              rel="noopener"
              underline="none"
              key={section.title}
              variant="body2"
              href={section.url}
              sx={{ p: 2, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </React.Fragment>
    );
  }
}
