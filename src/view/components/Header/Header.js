import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header className="header">
      <p className="portal-name">{props.portalName}</p>
    </header>
  )
}

export default Header
