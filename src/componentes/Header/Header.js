import React from "react";
import Logo from '../../imagenes/logo.svg'
import './Header.css'

function Header() {
  return(
    <div className="header">
      <img className="header-logo" src={Logo} alt="Logo"/>
      <h1 className="header-title">We are launching <span className="header-title-span">soon!</span></h1>
      <h4>Subscribe and get notified</h4>
    </div>
  )
}

export default Header;