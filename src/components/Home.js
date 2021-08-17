import React, { Component } from 'react';
import '../styles/Home.css';
import logo from '../images/Logo/logo_shade_regular.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'


class Home extends Component {
    render() {
        return (
            <div id="home" className="Home container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <img
                            className="Home-logo img-fluid"
                            src={logo}
                            alt="HackReality logo."
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div>
                            <h1 class="Home-header"><span className='Home-header-textonly'>March 12th-19th</span><FontAwesomeIcon id="calendar-icon" icon={faCalendarWeek} /></h1>
                            {/* <h2 id="countdown"><span className='Home-header-textonly'><Countdown date='March 12, 2021 00:00:00' /></span><FontAwesomeIcon icon={faStopwatch} /></h2> */}
                            <h2 class="Home-subheader"><span className='Home-header-textonly'>Virtual Hackathon</span><FontAwesomeIcon icon={faGlobe} /></h2>
                            <a
                                type="button"
                                href="https://umvl7k2zexf.typeform.com/to/tjKsq2xg"
                                id="register-btn"
                                className="Home-signup-btn btn btn-lg"
                            >
                                Register
                            </a>
                            <a
                                type="button"
                                href="https://umvl7k2zexf.typeform.com/to/kLFdsabL"
                                id="sponsor-btn"
                                className="Home-signup-btn btn btn-lg"
                            >
                                Sponsor
                            </a>
                            <a
                                type="button"
                                href="https://discord.gg/cjrHspfHKB"
                                id="discord-btn"
                                className="Home-signup-btn btn btn-lg"
                            >
                                Join Discord
                            </a>
                        </div>
                    </div>

                </div>
                {/* <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12"></div>
                    <div className="col-md-6 col-sm-12">
                        <img
                            className="Home-cloud"
                            src={homeimg1}
                            alt=""
                        />
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Home;