import React from 'react'
import './header.css';
import heroImage from '../../assets/hero-image.png'

//Components imports
import { MediaIcon,Nav } from '../../components/index';

//Data imports
import mediaIconsData from './mediaIconsData'

const Header = () => {

  const mediaIcons = mediaIconsData.map((mediaIcon) =>{
    return <MediaIcon 
      key={mediaIcon.id}
      id={mediaIcon.id}
      icon={mediaIcon.icon}
      brand={mediaIcon.brand}
      link={mediaIcon.link}
    />
  })


  return (
    <div className='header'>
      <div className='header-content'>
        <div className='header-content-text'>
          <div className='header-content-title title-gradient'>
            <h1>Hello, i am ariel</h1>
            <h1>and i am</h1>
            <h1>web developer</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, unde. Numquam quis soluta incidunt quidem distinctio dolorem. Ut deserunt nihil fugiat, nam, veniam delectus hic voluptatibus laboriosam nulla repellat commodi.</p>
        </div>

        <div className='header-image'>
          <img src={heroImage} alt='hero-image'></img>
        </div>
      </div>
      <div className='header-media-section'>
        {mediaIcons}
      </div>
    </div>
  )
}

export default Header