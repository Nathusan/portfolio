import React from 'react';
import { App } from '../pages/App';
import { About } from '../pages/About';
import { Projects } from '../pages/Projects';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </BrowserRouter>
  );
}
