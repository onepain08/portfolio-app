import React from 'react'
import './header.css';
import heroImage from '../../assets/hero-image.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <h1>Hello, my name is</h1>
        <h1>Ariel Tolwinski</h1>
        <h1>I am web developer</h1>
      </div>
      <div className='header-image'>
        <img src={heroImage}></img>
      </div>
    </div>
  )
}

export default Header