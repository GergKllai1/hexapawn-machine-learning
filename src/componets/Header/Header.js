import React from 'react'
import { Link } from 'react-router-dom';

import blackPawn from '../../assets/blackPawn.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Link className='link' to='/'>
        <img className='logo' src={blackPawn} alt="logo"/> Hexapawn</Link>
    </div>
  )
}

export default Header
