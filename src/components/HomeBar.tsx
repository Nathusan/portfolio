import * as React from 'react';
import { Link } from 'react-router-dom';
import '../style/homeBar.less';

export function Homebar(): JSX.Element {
  const onClick = () => {
    const navBar = document.getElementsByClassName('navbar-links')[0];

    navBar.classList.toggle('active');
  };

  return (
    <div className='home-bar'>
      <nav>
        <div className='nith-title'>Nithusan Sivalingarajah</div>
        <a className='toggle-button' onClick={onClick}>
          <span className='bar' />
          <span className='bar' />
          <span className='bar' />
        </a>
        <div className='navbar-links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
        </div>
      </nav>
    </div>
  );
}
