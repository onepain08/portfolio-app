import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <div className={props.className + ' primary-btn'} onClick={props.onClick}>
        
    </div>
  )
}

export default Button