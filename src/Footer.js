import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
          <p className="portal-name">{this.props.portalName}</p>
        </footer>
    );
  }
}

export default Footer;
