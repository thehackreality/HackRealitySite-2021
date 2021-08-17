import React, { Component } from 'react'
import '../styles/Sponsors.css'

import innovLabLogo from "../images/il-logo.png"
import innovCarLogo from "../images/innovatecarolina-logo.png"
import bldgLogo from "../images/BLDG25_NewLogo_Horz_Black.png"
import costarLogo from "../images/CoStar.png"
import genesysLogo from "../images/GENESYS.png"
import iqviaLogo from "../images/IQVIA.png"
import deutscheLogo from "../images/Deutsche.png"
import captechLogo from "../images/captech.png"
import bandwidthLogo from "../images/bandwidth.png"
import echoLogo from "../images/echoAR - Logo 2020 - Dark.png"
import crosscommLogo from "../images/crosscom.png"
import odinLogo from "../images/Odin-Black.png";

class Sponsors extends Component {
    render() {
        return (
            <div id="sponsors" className="container site section">
                <h1 className="section-header wow animated fadeIn">
                    Sponsored by
                </h1>
                <div className="row text-center">
                    <div className="col-md-12">
                        <img id="innovLab" className="Sponsors-logo wow animated fadeIn" src={innovLabLogo} alt="" />
                    </div>
                </div>
                <div className="row d-flex flex-wrap align-items-center text-center">
                    <div className="col-md-6">
                        <img
                            id="bldg"
                            className="Sponsors-logo wow animated fadeIn"
                            src={bldgLogo}
                            alt=""
                        />
                    </div>
                    <div className="col-md-6">
                        <img
                            id="innovCarolina"
                            className="Sponsors-logo wow animated fadeIn"
                            src={innovCarLogo}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row d-flex flex-wrap align-items-center text-center">
                    <div className="col-md-6">
                        <img
                            id='bldg'
                            className="Sponsors-logo wow animated fadeIn"
                            src={crosscommLogo}
                            alt=""
                        />
                    </div>
                    <div className="col-md-6">
                        <img
                            className="Sponsors-logo wow animated fadeIn"
                            src={odinLogo}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row d-flex flex-wrap align-items-center text-center">
                    <div className="col-md-4">
                        <img
                            className="Sponsors-logo wow animated fadeIn"
                            src={costarLogo}
                            alt=""
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            className="Sponsors-logo wow animated fadeIn"
                            src={genesysLogo}
                            alt=""
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            className="Sponsors-logo wow animated fadeIn"
                            src={iqviaLogo}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row d-flex flex-wrap align-items-center text-center">
                    <div className="col-md-4">
                        <img
                            className="Sponsors-logo wow animated fadeIn"
                            src={deutscheLogo}
                            alt=""
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            className="Sponsors-logo wow animated fadeIn"
                            src={captechLogo}
                            alt=""
                        />
                    </div>
                    <div className="col-md-4">
                        <img
                            className="Sponsors-logo wow animated fadeIn"
                            src={bandwidthLogo}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row d-flex flex-wrap align-items-center text-center">
                    <div className="col-md-12">
                        <img
                            className="Sponsors-logo wow animated fadeIn"
                            src={echoLogo}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;