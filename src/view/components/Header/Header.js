import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header className="header">
      <p className="portal-name">{props.portalName}</p>
    <a className="portal-docs" href="https://github.com/scarigor/react-news-portal">GitHub</a>
    </header>
  )
}

export default Header
