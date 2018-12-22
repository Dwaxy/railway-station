import React from 'react'
import Img from "gatsby-image"
import logo from "../img/logo.png"

const Header = ({ className }) => {
  return (
    <section id="header">

      <div className="logo">
        <img src={logo} />
      </div>
    </section>
  )
}


export default Header
