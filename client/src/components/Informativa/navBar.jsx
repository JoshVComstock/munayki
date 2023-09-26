import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { SectionNav } from '../../style/navStyle'


const NavBar = () => {
  return (
  <SectionNav>
    <nav>
      <img src="#" alt="logo" />
     <section>   <Link to="/">home</Link>
        <Link to="/ubicaciones">Ubicaciones</Link>
        <Link to="/login" className='login'>Login</Link></section>
    </nav>
    <Outlet/>
  </SectionNav>
  )
}

export default NavBar