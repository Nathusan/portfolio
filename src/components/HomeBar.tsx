import * as React from 'react';
import '../style/homeBar.less';
import { useEffect, useState } from 'react';

export function Homebar(): JSX.Element {
  const onClick = () => {
    const navBar = document.getElementsByClassName('navbar-links')[0];

    navBar.classList.toggle('active');
  };

  return (
    <div className='home-bar'>
      <div className='nith-title'>Nithusan Sivalingarajah</div>
      <nav className='navbar-links'>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
      </nav>
      <a className='toggle-button' onClick={onClick}>
        <span className='bar' />
        <span className='bar' />
        <span className='bar' />
      </a>
    </div>
  );
}
