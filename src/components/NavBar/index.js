import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function NavBar() {
  return (
    <div className='container'>
      <div className='links-container'>
        <Link to='/'>Home</Link> | <Link to='/shop'>Shop</Link> |{' '}
        <Link to='/details/1'>About</Link>
      </div>
      <div className='icons-container'></div>
    </div>
  );
}

export { NavBar };
