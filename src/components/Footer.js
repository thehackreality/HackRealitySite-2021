import React, { Component } from 'react';
import '../styles/Footer.css';
import logo from '../images/Logo/LogoColor_v3.png';


class Footer extends Component {
    render() {
        return (
            <footer id="Contact" className="Footer">
                <div class="container-fluid" id="contact">
                    <div class="row text-center">
                        <div class="col-md-12 section-header">
                            <h1>Contact</h1>
                            <p>
                                <a
                                    href="https://www.facebook.com/hackmyreality/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="fa fa-facebook"></i> Facebook</a
                                >
                            </p>
                            <p>
                                <a
                                    href="https://www.instagram.com/thehackreality/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i class="fa fa-instagram"></i> Instagram</a
                                >
                            </p>
                            <p>
                                <a href="mailto:hackrealityteam@gmail.com">
                                    <i class="fa fa-envelope-square"></i> Email</a
                                >
                            </p>
                        </div>
                        <div class="col-md-12">
                            <hr class="Footer-break light" />
                            <img className="Footer-logo" src={logo} alt="HackReality Footer Logo."/>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;