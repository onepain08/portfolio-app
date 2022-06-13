import React from 'react'
import './projects.css';

import {ProjectCard} from '../../components/index'

import projectCardsData from './projectCardsData'

const Projects = () => {

const projectCards = projectCardsData.map(card =>{
  return(
    <ProjectCard 
      key={card.id}
      id={card.id}
      image={card.image}
      title={card.title}
      description={card.description}
      link={card.link}
      more={card.more}
    />
  )
})


  return (
    <div className='projects'>
        <h1 className='title-gradient projects-title'>Projects</h1>
      <div className='projects-projects-cards'>
        {projectCards}
      </div>
    </div>
  )
}

export default Projects