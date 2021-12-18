import * as React from 'react';
import { Link } from "react-router-dom";

export function Homebar(): JSX.Element {
    return (
        <div className='homebar'>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        </div>
    )
}