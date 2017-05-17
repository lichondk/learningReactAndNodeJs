import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class BootstrapNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-light bg-faded">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home"><b>Opret booking</b></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <a className="navbar-brand" href="/contact"><b>Kontakt</b></a>
          <a className="navbar-brand" href="/dashboard"><b>Alle bookinger</b></a>
          <a className="navbar-brand" href="/create/hairdresser"><b>Opret en frisør</b></a>
        </Nav>
      </Navbar>
    );
  }
}