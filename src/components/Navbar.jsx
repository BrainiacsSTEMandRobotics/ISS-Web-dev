import React from 'react'
import SearchForm from './Search-form'
import "./styles/navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
          <ul className='nav-ul'>
              <li>Home</li>
              <SearchForm/>
          </ul>
    </nav>
  )
}

export default Navbar
