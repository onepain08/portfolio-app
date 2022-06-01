import React from 'react';
import './about.css';
import langueIconsData from './langueIconsData'
import technologyIconsData from './technologiesIconsData'
import learningIconsData from './learningIconsData'

//Component imports
import {Topic, MediaIcon} from '../../components/index'

const About = () => {

  const langueIcons = langueIconsData.map((langueIcon) => {
    return <MediaIcon 
              key={langueIcon.id}
              id={langueIcon.id}
              icon={langueIcon.icon}
              brand={langueIcon.brand}
              link={langueIcon.link}
            />
  })

  const technologyIcons = technologyIconsData.map((techIcon) => {
    return <MediaIcon 
              key={techIcon.id}
              id={techIcon.id}
              icon={techIcon.icon}
              brand={techIcon.brand}
              link={techIcon.link}
            />
  })

  const learningIcons = learningIconsData.map((learningIcon) => {
    return <MediaIcon 
              key={learningIcon.id}
              id={learningIcon.id}
              icon={learningIcon.icon}
              brand={learningIcon.brand}
              link={learningIcon.link}
            />
  })
  



  return (
    <div className='about' id='about'>
      <div className='about-topic-horizontal'>
        <Topic text="About Me" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam consequuntur veritatis, similique exercitationem illum neque fugiat facere quidem vero, nisi maiores! Sed, asperiores hic alias tempore consequatur repellendus harum iste vero explicabo sunt voluptas culpa dolorum, officia incidunt itaque sapiente aspernatur odio. Quaerat a eaque maiores saepe reprehenderit ex iure?</p>
      </div>
      <div className='about-topic-vertical'>
        <div className='about-topic-vertical-par'>
          <Topic text='Languages' />
         <div className='about-topic-vertical-icons'>
          {langueIcons}
         </div>
        </div>
        <div className='about-topic-vertical-par'>
          <Topic text='Technologies' />
          <div className='about-topic-vertical-icons'>
            {technologyIcons}
          </div>
        </div>
        <div className='about-topic-vertical-par'>
          <Topic text='Learning queue' />
          <div className='about-topic-vertical-icons'>
            {learningIcons}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About