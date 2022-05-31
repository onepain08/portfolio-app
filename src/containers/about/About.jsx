import React from 'react';
import './about.css';

//Component imports
import {Topic} from '../../components/index'

const About = () => {
  return (
    <div className='about'>
      <div className='about-topic-horizontal'>
        <Topic text="About Me" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam consequuntur veritatis, similique exercitationem illum neque fugiat facere quidem vero, nisi maiores! Sed, asperiores hic alias tempore consequatur repellendus harum iste vero explicabo sunt voluptas culpa dolorum, officia incidunt itaque sapiente aspernatur odio. Quaerat a eaque maiores saepe reprehenderit ex iure?</p>
      </div>
      <div className='about-topic-vertical'>
        <div className='about-topic-vertical-par'>
          <Topic text='placeholder' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt labore accusamus deleniti harum cumque impedit eos? Aperiam necessitatibus quidem perferendis enim commodi! Cumque praesentium eum, perferendis iusto at quidem.
          </p>
        </div>
        <div className='about-topic-vertical-par'>
          <Topic text='placeholder' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt labore accusamus deleniti harum cumque impedit eos? Aperiam necessitatibus quidem perferendis enim commodi! Cumque praesentium eum, perferendis iusto at quidem.
          </p>
        </div>
        <div className='about-topic-vertical-par'>
          <Topic text='placeholder' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt labore accusamus deleniti harum cumque impedit eos? Aperiam necessitatibus quidem perferendis enim commodi! Cumque praesentium eum, perferendis iusto at quidem.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About