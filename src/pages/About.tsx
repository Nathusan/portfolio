import React from 'react';
import { Homebar } from '../components/HomeBar';

export function About(): JSX.Element {
  return (
    <div>
      <Homebar />
      <h1>Hello About!</h1>
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Aperiam,
        magnam numquam labore ut in vero voluptatibus eveniet exercitationem illum quas.
      </h1>
    </div>
  );
}
