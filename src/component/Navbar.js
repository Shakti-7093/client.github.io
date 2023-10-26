import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {

    const {state, dispatch} = useContext(UserContext);

    const RenderMenu = ()=>{
        if(state){
            return (
                <>    
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">LogOut</NavLink>
                    </li>
                </>
            )
        }else{
            return (
                <>     
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">LogIn</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                    </li>   
                </>
            )
        }
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand mb-1 h6" to="#">Shakti Developers</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <RenderMenu/>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar