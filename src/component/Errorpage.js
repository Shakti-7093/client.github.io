import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

function Errorpage() {
  return (
    <>
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Page Not Found</h2>
                <p className="mb-1">
                    The page you are looking for might have removed as well as had its name changed or is temporarily unavailable.
                </p>
                <NavLink to="/">Back To Home Page</NavLink>
            </div>
        </div>
    </>
  )
}

export default Errorpage