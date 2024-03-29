import React from 'react';
import { IoBriefcaseSharp } from 'react-icons/io5';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GiGraduateCap } from 'react-icons/gi';
import { SiVsco, SiLinkedin } from 'react-icons/si';
import image from '../img/shot1.jpg';
import { Homebar } from '../components/HomeBar';
import '../style/main.less';
import { navToExternalWebsite, Websites, isElementActive } from '../components/helpers';
import { DropDownBuilder } from '../components/dropDown';

export interface ListInformation {
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
    grades: 'Studying Computer Science with Games Development. Graudated with a 2:1',
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
    additional: `At Wren, I came in as a Graduate Javascript Developer and hit the ground running.
    Set free on the bugs team I learned crucial debugging skills, which helped me understand
    how to write robust code,
    this being especially needed in a loosely typed language that is Javascript.

    Soon after I was moved to the New Products team
    where all new products are realized,
    engineered and released.

    This involved interaction with key business Stake holders and helping them vision
    their products.
    Working in this Team I learned the importance of clear communication between
    client and developers.

    I started taking on Scrum responsibities within the team
    and was furtunate enough to get the opportunity to take the
    APMG Certified Scrum master training.

    I have had the oportunity have my own project as technical lead and Scrum master.

    I am now looking to further grow and develop my skills with you.`,
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
          <section className='col-2 ss-style-triangles' id='col-2'>
            <div id='me' className='me'>
              <div id='name'>Nithusan Sivalingarajah</div>
              <div className='image-container' id='image-container'>
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
            As a 25-year-old computer scientist with a love for nature and a passion for exploring,
            I bring a unique perspective to my work as a Developer.
            With over 3 years of experience designing user interfaces and developing back-end
            systems, I have honed my skills in both front-end and back-end development.
            <br />
            <br />
            As a detail-oriented and impact-driven developer,
            I take pride in my ability to create strong,
            structured, and efficient code.
            I am constantly seeking new challenges and opportunities to expand my skills and
            knowledge, and I approach each project with enthusiasm and a dedication to excellence.
            <br />
            <br />
            Currently, I am working as a Developer at Wren Kitchens,
            where I have had the opportunity to work on
            a variety of exciting projects and collaborate with a talented team of developers.
            I am excited to continue growing my skills and making meaningful
            contributions to the field of computer science.
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
          <div className='work-container'>
            {DropDownBuilder(WORK_EXPERIENCE, 5)}
          </div>
        </div>
        <div
          className='footer'
        >
          Hello world, this is my first Website!
          <div className='footer-container'>
            <p>Find me here!</p>
            <div
              onClick={() => navToExternalWebsite(Websites.instagram)}
              role='presentation'
              className='presentation'
            >
              <AiOutlineInstagram />
              <div>Instagram</div>
            </div>
            <div
              onClick={() => navToExternalWebsite(Websites.vsco)}
              role='presentation'
              className='presentation'
            >
              <SiVsco />
              <div>VSCO</div>
            </div>
            <div
              onClick={() => navToExternalWebsite(Websites.linkedIn)}
              role='presentation'
              className='presentation'
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
