import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { SectionNav } from '../../style/navStyle'


const NavBar = () => {
  return (
  <SectionNav>
    <nav>
      <img src="#" alt="logo" />
        <Link to="/">home</Link>
        <Link to="/ubicaciones">Ubicaciones</Link>
        <Link to="/dashboard" className='login'>Login</Link>
    </nav>
    <Outlet/>
  </SectionNav>
  )
}

export default NavBar