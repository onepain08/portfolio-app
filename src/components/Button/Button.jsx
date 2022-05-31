import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <div className={props.className + ' primary-btn'} onClick={props.onClick}>
        <div className='bar btn-margin-bot'></div>
        <div className='bar btn-margin-bot'></div>
        <div className='bar'></div>
    </div>
  )
}

export default Button