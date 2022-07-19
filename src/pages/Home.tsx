import React from 'react';
import { BiUser } from 'react-icons/bi';
import { GiGraduateCap } from 'react-icons/gi';
import { IoChevronDownSharp } from 'react-icons/io5';
import image from './shot1.jpg';
import { Homebar } from '../components/HomeBar';
import '../style/homeBar.less';
import { isVisibleInViewport, isElementActiveGeneral } from '../components/helpers';

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
            <div
              className='lox'
              onClick={() => {
                isElementActiveGeneral('detail');
              }}
              onKeyPress={() => isElementActiveGeneral('detail')}
              role='button'
              tabIndex={0}
            >
              <h3>Loxford School of Science and Technology / Secondary</h3>
              <h6>JUNE 2010 - SEPTEMBER 2014</h6>
              <div className='arrow-indicator1'>
                <IoChevronDownSharp />
              </div>
              <div className='detail'>
                <ul>
                  <li>
                    GCSE English, Maths, Core Science and Additional Science (BCBB),
                    Addtional 8 GCSEs with Cs and above.
                  </li>
                  <li>
                    German GCSE - A*
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='hav'
              onClick={() => {
                isElementActiveGeneral('hav-detail');
                isElementActiveGeneral('arrow-indicator2');
              }}
              onKeyPress={() => isElementActiveGeneral('hav-detail')}
              role='button'
              tabIndex={0}
            >
              <h3>Havering Sixth form / College</h3>
              <h6>SEPTEMBER 2014 - AUGUST 2016</h6>
              <div className='arrow-indicator2'>
                <IoChevronDownSharp />
              </div>
              <div className='hav-detail'>
                <ul>
                  <li>
                    AS German, Computing - AC
                  </li>
                  <li>
                    A Level IT C
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='hull'
              onClick={() => {
                isElementActiveGeneral('hull-detail');
                isElementActiveGeneral('arrow-indicator');
              }}
              onKeyPress={() => isElementActiveGeneral('hull-detail')}
              role='button'
              tabIndex={0}
            >
              <h3>Hull University / Computer Science</h3>
              <h6>SEPTEMBER 2016 - JUNE 2021</h6>
              <div className='arrow-indicator'>
                <IoChevronDownSharp />
              </div>
              <div className='hull-detail'>
                <ul>
                  <li>
                    Studying Computer Science with Games Development.
                    Graudated with a 2:1
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
