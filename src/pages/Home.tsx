import React from 'react';
import { BiUser } from 'react-icons/bi';
import { GiGraduateCap } from 'react-icons/gi';
import image from './shot1.jpg';
import { Homebar } from '../components/HomeBar';
import '../style/homeBar.less';
import { isVisibleInViewport } from '../components/helpers';
import { DropDownBuilder } from '../components/dropDown';

interface Education {
  className: string,
  placeName: string,
  time: string,
  grades: string,
  additional?: string,
}

const STUDY_LIST: Education [] = [
  {
    className: 'lox',
    placeName: 'Loxford School of Science and Technology / Secondary',
    time: 'JUNE 2010 - SEPTEMBER 2014',
    grades: 'GCSE English, Maths, Core Science and Additional Science (BCBB) Addtional 8 GCSEs with Cs and above.',
    additional: 'German GCSE - A*',
  },
  {
    className: 'hav',
    placeName: 'Havering Sixth form / College',
    time: 'SEPTEMBER 2014 - AUGUST 2016',
    grades: ' AS German, Computing - AC',
    additional: 'A Level IT - C',
  },
  {
    className: 'hull',
    placeName: 'Hull University / Computer Science',
    time: 'SEPTEMBER 2016 - JUNE 2021',
    grades: ' Studying Computer Science with Games Development. Graudated with a 2:1',
  },
];

export class App extends React.Component {
  componentDidMount(): void {
    document.addEventListener('scroll', this.isElementActive, true);
  }

  componentWillUnmount(): void {
    document.removeEventListener('scroll', this.isElementActive, true);
  }

  private isElementActive(): void {
    const nithTitle = document.getElementsByClassName('nith-title')[0];

    if (!isVisibleInViewport() && nithTitle.classList[1] !== 'active') {
      nithTitle.classList.add('active');
    } else if (isVisibleInViewport()) {
      nithTitle.classList.remove('active');
    }
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
                <img src={image} alt='Nith' />
              </div>
            </div>
          </section>
        </div>
        <div id='about' className='about'>
          <div className='user-icon'>
            <BiUser />
          </div>
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
        <div id='education' className='education'>
          <div className='user-icon'>
            <GiGraduateCap />
          </div>
          <div className='edu-container'>
            {DropDownBuilder(STUDY_LIST)}
          </div>
        </div>
        <div className='divider div-transparent' />
      </div>

    );
  }
}
