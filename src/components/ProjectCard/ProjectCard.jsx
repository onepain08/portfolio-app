import React from 'react'
import './project-card.css'
import hero from '../../assets/hero-image.png'

import {github} from '../../assets/index'

const ProjectCard = (props) => {

    const [hover,setHover] = React.useState(false)



  return (
    <div className='project-card' onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
        {!hover && <img src={hero}></img>}
        {hover &&<div className='project-card-hover-content'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className='project-card-hover-content-btns'>
                <a href='#'><img src={github} alt='github'></img></a>
                <button>View More</button>
            </div>
        </div>}
    </div>
  )
}

export default ProjectCard