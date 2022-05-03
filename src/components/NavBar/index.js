import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiAcademicCap, HiBell, HiCalculator } from 'react-icons/hi';
import './styles.css';

function NavBar() {
  return (
    <div className='container'>
      <div className='links-container'>
        <NavLink
          className='links'
          to='/'
          style={({ isActive }) => (isActive ? { color: 'white' } : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          className='links'
          to='/shop'
          style={({ isActive }) => (isActive ? { color: 'white' } : undefined)}
        >
          Shop
        </NavLink>

        <NavLink
          className='links'
          to='/details/1'
          style={({ isActive }) => (isActive ? { color: 'white' } : undefined)}
        >
          About
        </NavLink>
      </div>
      <div className='icons-container'>
        <HiAcademicCap />
        <HiCalculator />
        <HiBell />
      </div>
    </div>
  );
}

export { NavBar };
