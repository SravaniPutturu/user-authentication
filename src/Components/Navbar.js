
import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='nav'>
        <p>Header</p>
        <nav>
            <NavLink to='/'>Signup</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
        </nav>
    </div>
  )
}

export default Navbar