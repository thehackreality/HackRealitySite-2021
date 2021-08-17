import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import smallLogo from "../images/Logo/LogoColor_v1.png";

function Navbar() {

    const location = useLocation();

    let isHome = (location.pathname === '/schedule' || location.pathname === '/tracks') ? false : true;


    return (
        <nav className="Navbar fixed-top navbar-expand-lg navbar navbar-default">
            <NavLink className="navbar-brand" to="/">
                <img src={smallLogo} alt="Logo" style={{ width: "40px" }} />
            </NavLink>
            <button
                className="hb navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        {isHome ? <a className="Navbar-orange nav-link" href="#home">Home</a> :
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        }
                    </li>
                    { isHome ? 
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        : ''
                    }
                    { isHome ? 
                        <li className="nav-item">
                            <a className="nav-link" href="#faq">FAQs</a>
                        </li>
                        : ''
                    }
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/schedule">Schedule</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/tracks">Tracks/Prizes</NavLink>
                    </li>
                    { isHome ? 
                        <li className="nav-item">
                            <a className="nav-link" href="#sponsors">Sponsors</a>
                        </li>
                        : ''
                    }
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;