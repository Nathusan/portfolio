import React from 'react';
import image from './shot.png';
import { Homebar } from '../components/HomeBar';
import '../style/homeBar.less';

export class App extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.doSomething, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.doSomething, true);
  }

  doSomething = () => {
    const nithTitle = document.getElementsByClassName('nith-title')[0];

    if (!this.isVisibleInViewport() && nithTitle.classList[1] !== 'active') {
      nithTitle.classList.add('active');
    } else if (this.isVisibleInViewport()) {
      nithTitle.classList.remove('active');
    }
  };

  private isVisibleInViewport(): boolean {
    const myElement = document.getElementById('container');
    const bounding = myElement.getBoundingClientRect();
    const myElementHeight = myElement.offsetHeight;
    const myElementWidth = myElement.offsetWidth;

    if (
      bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
      console.log('hi');
      return true;
    }
    console.log('bye');
    return false;
  }

  public render() {
    return (
      <div className='app'>
        <Homebar />
        <div id='container' className='container'>
          <div className='codrops-top clearfix'>
            <span className='right' />
          </div>
          <section className='col-2 ss-style-triangles'>
            <div id='me' className='me'>
              <div id='name'>Nithusan Sivalingarajah</div>
              <div className='image-container'>
                <img src={image} alt='Niff' />
              </div>
            </div>
          </section>
        </div>
        <div id='about' className='about'>
          <i className='glyphicon glyphicon-user' />
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
            developed excellent problem solving and teamwork skills through
            my degree and the past two years,
            working at Wren as a Javascript Developer.
            At Wren, I came in as a junior Dev and hit the ground running pretty much immediately,
            being set free in the bugs team & later being moved to the product team
            where all new products are realized,
            engineered and released.
            For the state of the Art, CAD system for Kitchen Planning developed on Typescript/React.

            developed excellent problem solving and teamwork skills through
            my degree and the past two years,
            working at Wren as a Javascript Developer.
            At Wren, I came in as a junior Dev and hit the ground running pretty much immediately,
            being set free in the bugs team & later being moved to the product team
            where all new products are realized,
            engineered and released.
            For the state of the Art, CAD system for Kitchen Planning developed on Typescript/React.
            developed excellent problem solving and teamwork skills through
            my degree and the past two years,
            working at Wren as a Javascript Developer.
            At Wren, I came in as a junior Dev and hit the ground running pretty much immediately,
            being set free in the bugs team & later being moved to the product team
            where all new products are realized,
            engineered and released.
            For the state of the Art, CAD system for Kitchen Planning developed on Typescript/React.

            developed excellent problem solving and teamwork skills through
            my degree and the past two years,
            working at Wren as a Javascript Developer.
            At Wren, I came in as a junior Dev and hit the ground running pretty much immediately,
            being set free in the bugs team & later being moved to the product team
            where all new products are realized,
            engineered and released.
            For the state of the Art, CAD system for Kitchen Planning developed on Typescript/React.

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
}
