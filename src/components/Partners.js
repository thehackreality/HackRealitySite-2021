import React, { Component } from 'react'
import '../styles/Partners.css'
import arvrLogo from '../images/arvrlogo.png'
import unccsLogo from '../images/UNCCS.png'

class Partners extends Component {
    render() {
        return (
            <div id="partners" className="container site section">
                <h1 className="section-header wow animated fadeIn">
                    Partnered with
                </h1>
                <div className="row d-flex flex-wrap align-items-center text-center">
                    <div className="col-md-6">
                        <img
                            id="bldg"
                            className="Sponsors-logo wow animated fadeIn"
                            src={arvrLogo}
                            alt=""
                        />
                    </div>
                    <div className="col-md-6">
                        <img
                            id="innovCarolina"
                            className="Sponsors-logo wow animated fadeIn"
                            src={unccsLogo}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Partners;