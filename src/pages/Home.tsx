import React from 'react';
import image from './shot.png';
import { Homebar } from '../components/HomeBar';
import '../style/homeBar.less';

export function App() {
  return (
    <div className='app'>
      <Homebar />
      <div className='container'>

        <div className='codrops-top clearfix'>

          <span className='right' />
        </div>

        <section className='col-2 ss-style-triangles'>
          <div className='column text' />
          <div className='column' />
        </section>
      </div>
      <div id='me' className='me'>
        <p>Nithusan Sivalingarajah</p>
        <img src={image} alt='Niff' />
      </div>
      <div id='about' className='about'>
        <p>
          I am a Computer Scientist graduate from the University of Hull.
          I have developed excellent problem solving and teamwork skills through
          my degree and the past two years,
          working at Wren as a Javascript Developer.
          At Wren, I came in as a junior Dev and hit the ground running pretty much immediately,
          being set free in the bugs team & later being moved to the product team
          where all new products are realized,
          engineered and released.
          For the state of the Art, CAD system for Kitchen Planning developed on Typescript/React.

          I am now looking to further grow and develop my skills with you.
        </p>
      </div>
      <div className='divider div-transparent' />

      <div id='projects' className='projects'>
        <p>
          I am a Computer Scientist graduate from the University of Hull.
          I have developed excellent problem solving and teamwork skills through
          my degree and the past two years,
          working at Wren as a Javascript Developer.
          At Wren, I came in as a junior Dev and hit the ground running pretty much immediately,
          being set free in the bugs team & later being moved to the product team
          where all new products are realized,
          engineered and released.
          For the state of the Art, CAD system for Kitchen Planning developed on Typescript/React.

          I am now looking to further grow and develop my skills with you.
        </p>
      </div>
    </div>
  );
}
