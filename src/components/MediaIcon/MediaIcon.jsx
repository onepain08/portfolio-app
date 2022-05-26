import React from 'react'
import './media-icon.css'

const MediaIcon = (props) => {
  return (
    <div className='media-icon' id={props.id}>
        <a href={props.link} target='blank'>
            <img src={props.icon} alt='pic'></img>
            <h2>{props.brand}</h2>
        </a>
    </div>
  )
}

export default MediaIcon