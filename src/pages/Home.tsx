import React from 'react';
import { IoBriefcaseSharp } from 'react-icons/io5';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GiGraduateCap } from 'react-icons/gi';
import { SiVsco, SiLinkedin } from 'react-icons/si';
import image from './shot1.jpg';
import { Homebar } from '../components/HomeBar';
import '../style/homeBar.less';
import { navToExternalWebsite, Websites, isElementActive } from '../components/helpers';
import { DropDownBuilder } from '../components/dropDown';

interface ListInformation {
  className: string,
  placeName: string,
  time: string,
  location?: string,
  grades?: string,
  additional?: string,
}

const STUDY_LIST: ListInformation[] = [
  {
    className: 'hull',
    placeName: 'Hull University / Computer Science',
    time: 'SEPTEMBER 2016 - JUNE 2021',
    grades: ' Studying Computer Science with Games Development. Graudated with a 2:1',
  },
  {
    className: 'hav',
    placeName: 'Havering Sixth form / College',
    time: 'SEPTEMBER 2014 - AUGUST 2016',
    grades: ' AS German, Computing - AC',
    additional: 'A Level IT - C',
  },
  {
    className: 'lox',
    placeName: 'Loxford School of Science and Technology / Secondary',
    time: 'JUNE 2010 - SEPTEMBER 2014',
    grades: 'GCSE English, Maths, Core Science and Additional Science (BCBB) Addtional 8 GCSEs with Cs and above.',
    additional: 'German GCSE - A*',
  },
];

const WORK_EXPERIENCE: ListInformation[] = [
  {
    className: 'wren',
    placeName: 'Javascript Developer / Wren',
    time: 'July 2020 - Current',
    location: 'Barton Upon-Humber',
    additional: `At Wren, I was thrust straight into one of the most complex engines ever possible created with Javascript to date. In the darkness, as a Junior Javascript developer, I learned important skills on how to efficiently debug and code.
    During my time at Wren, I worked on a multitude of systems which I got to experience through my work in the Tactical Bug team. Where I helped streamline the reporting and diagnosis of Bugs.
    Later I was moved to the Products team where I would learn to creatively solve problems and create the features and products the business requested to introduced into planner. At the products team is where I learned the important interaction between Business, Developers and QA. which helped me excel at being team lead. `,
  },
  {
    className: 'made',
    placeName: 'German Agent / MADE.com',
    time: 'June 2019 - September 2019',
    location: 'Canary Wharf',
    additional: `Worked as a German customer service team member operating on the phone.
    This job showed me the fast-paced environment of an office.
    It required good listening and communication skills in order to find the best solution for the customer.`,
  },
];

export class App extends React.Component {
  componentDidMount(): void {
    document.addEventListener('scroll', isElementActive, true);
  }

  componentWillUnmount(): void {
    document.removeEventListener('scroll', isElementActive, true);
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
        <div id='about' className='containers'>
          <div className='icon'>
            <BiUser />
          </div>
          <p>
            Computer Science graduate from the University of Hull.
            I have developed problem solving and teamwork skills through
            my degree and the past two years,
            working at Wren Kitchens as a Javascript Developer.
            <p>&nbsp;</p>
            At Wren, I came in as a Graduate Javascript Developer and hit the ground running.
            Set free on the bugs team I learned crucial debugging skills, which helped me understand
            how to write robust code,
            this being especially needed in a loosely typed language that is Javascript.

            Soon after I was moved to the New Products team
            where all new products are realized,
            engineered and released.
            <p>&nbsp;</p>
            This involved interaction with key business Stake holders and helping them vision
            their products.
            Working in this Team I learned the importance of clear communication between
            client and developers.
            One of a kind CAD system for Kitchen Planning developed on Typescript/React.

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
        <div id='work-experience' className='containers'>
          <div className='icon'>
            <IoBriefcaseSharp />
          </div>
          <div className='edu-container'>
            {DropDownBuilder(WORK_EXPERIENCE)}
          </div>
        </div>
        <div className='divider div-transparent' />
        <div
          className='footer'
        >
          Hello world, this is my first Website!
          <div className='footer-container'>
            <p>Find me here!</p>
            <div
              onClick={() => navToExternalWebsite(Websites.instagram)}
              role='presentation'
            >
              <AiOutlineInstagram />
              <div>Instagram</div>
            </div>
            <div
              onClick={() => navToExternalWebsite(Websites.vsco)}
              role='presentation'
            >
              <SiVsco />
              <div>VSCO</div>
            </div>
            <div
              onClick={() => navToExternalWebsite(Websites.linkedIn)}
              role='presentation'
              className='icons'
            >
              <SiLinkedin />
              <div>LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
