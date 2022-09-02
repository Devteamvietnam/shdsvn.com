import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { AppContextProps } from '@/api';

import logo from '../../assets/images/logo.svg';
import '../header/style.scss';

export class UIHeader extends Component<AppContextProps> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state
    });
  }
  render() {
    let name = 'SHDSVN';
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} className="App-logo-header" alt="logo" />
            {name}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem></NavItem>
              <NavItem>
                <NavLink href="https://github.com/Devteamvietnam/shdsvn.com">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
