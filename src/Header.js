import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="header">
          <p>{this.props.portalName}</p>
        </header>
    );
  }
}

export default Header;
