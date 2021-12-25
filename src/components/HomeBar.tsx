import * as React from 'react';
import { Link } from "react-router-dom";
import '../style/homeBar.less';

export function Homebar(): JSX.Element {
    return (
        <div className="home-bar">
            <nav>
            <div className="nith-title">Nith's Portfolio</div>
            <a className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </div>
            </nav>
        </div>
    )
}