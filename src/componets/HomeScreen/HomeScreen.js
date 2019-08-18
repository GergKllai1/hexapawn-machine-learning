import React from 'react'
import { Link } from 'react-router-dom';

import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Link className='homescreen-button' to='/new-game'>New Game</Link>
    </div>
  )
}

export default HomeScreen
