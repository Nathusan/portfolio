import * as React from 'react';
import '../style/main.less';

export function Homebar(): JSX.Element {
  const onClick = () => {
    const navBar = document.getElementsByClassName('navbar-links')[0];

    navBar.classList.toggle('active');
  };

  return (
    <div className='home-bar'>
      <div className='nith-title'>Nithusan Sivalingarajah</div>
      <nav className='navbar-links' id='navbar-links'>
        <a href='#about'>About</a>
        <a href='#education'>Education</a>
        <a href='#work-experience'>Work Experience</a>
      </nav>
      <button type='button' aria-label='menu' className='toggle-button' onClick={onClick}>
        <span className='bar' />
        <span className='bar' />
        <span className='bar' />
      </button>
    </div>
  );
}
