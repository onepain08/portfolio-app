import React from 'react'
import './projects.css';

import {ProjectCard} from '../../components/index'

const Projects = () => {
  return (
    <div className='projects'>
        <h1 className='title-gradient projects-title'>Projects</h1>
      <div className='projects-projects-cards'>
        <ProjectCard title='Project placeholder' description='asdasd asd asd asd asdasdas aasdasd' />
        <ProjectCard title='Project placeholder' description='asdasd asd asd asd asdasdas aasdasd' />
        <ProjectCard title='Project placeholder' description='asdasd asd asd asd asdasdas aasdasd' />
        <ProjectCard title='Project placeholder' description='asdasd asd asd asd asdasdas aasdasd' />
        <ProjectCard title='Project placeholder' description='asdasd asd asd asd asdasdas aasdasd' />
      </div>
    </div>
  )
}

export default Projects