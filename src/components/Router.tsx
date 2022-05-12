import React from 'react';
import * as reactRouterDom from 'react-router-dom';
import { App } from '../pages/Home';
import { About } from '../pages/About';
import { Projects } from '../pages/Projects';

export function Router(): JSX.Element {
  return (
    <reactRouterDom.BrowserRouter>
      <reactRouterDom.Routes>
        <reactRouterDom.Route path='/' element={<App />} />
        <reactRouterDom.Route path='/about' element={<About />} />
        <reactRouterDom.Route path='/projects' element={<Projects />} />
      </reactRouterDom.Routes>
    </reactRouterDom.BrowserRouter>
  );
}
