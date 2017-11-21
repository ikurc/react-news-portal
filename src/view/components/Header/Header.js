import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    return (
        <header className="header">
          <p className="portal-name">{this.props.portalName}</p>
        </header>
    );
  }
}

export default Header;
