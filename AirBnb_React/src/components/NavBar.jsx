import React from 'react'
import logo from '../assets/airbnb1.png'

export default function NavBar() {
  return (
    <nav>
      <img className="nav--logo" src={logo} alt="airbnb logo" width="150px" />
    </nav>
  )
}
