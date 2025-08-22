import React from 'react'
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to='/' className='logo'>Workout App</Link>
        </div>
    </header>
  )
}
