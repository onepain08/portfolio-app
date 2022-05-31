import React from 'react'
import './topic.css'

const Topic = (props) => {
  return (
    <div className='topic'>
      <div className='overline'/>
      <h2>{props.text}</h2>
    </div>
  )
}

export default Topic