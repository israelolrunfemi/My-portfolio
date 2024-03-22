import React from 'react';
import {Link} from 'react-scroll';
import './navbar.css'

function Navbar() {
  return (
    <div>
       <nav className='navbar'>
   <h2 className='logo'> <span>Israel</span> Olorunfemi</h2>
      <div className="desktopMenu">
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>Portfolio</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='style.desktopMenuListItem'>Contact</Link>
      </div>
       <button className="desktopMenuBtn">
        Contact Me
       </button>


    </nav> 
      
    </div>
  )
}

export default Navbar
