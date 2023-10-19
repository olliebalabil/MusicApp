import { NavLink, Outlet } from "react-router-dom"
import React from "react"

import "./Nav.css"

let activeStyle = {
  textDecoration: "underline"
}

export default function Nav() {
  return (
    <>
      <nav>
        <h1>Björk</h1>
        <ul className="nav-links">
          <NavLink to='/' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
          <NavLink to='/profile' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Profile</NavLink>
          <NavLink to='/albums' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Albums</NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}