import React, { Component } from 'react';
import '../styles/Tracks.css'

import healthcareImg from "../images/TrackLogo/Healthcare_v1.png"
import educationImg from "../images/TrackLogo/Education_v1.png"
import environmentImg from "../images/TrackLogo/Environment_v1.png"
import entertainmentImg from "../images/TrackLogo/Entertainment_v1.png"

class Tracks extends Component {
    render() {
        return (
            <div className="Tracks container site-section">
                <h1 className="Tracks-header">Tracks</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div class="card">
                            <img class="card-img-top" src={healthcareImg} alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title"><strong>Healthcare Track</strong></h5>
                                <p class="card-text">This track if for hackers who want to use AR/VR to improve the healthcare field and take it in a new direction by improving accessibility and making information easier to understand .</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="card">
                            <img class="card-img-top" src={environmentImg} alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title"><strong>Environment Track</strong></h5>
                                <p class="card-text">This track is for hackers who want to use AR/VR to raise environmental awareness and the impact of climate change using AR.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div class="card">
                            <img class="card-img-top" src={educationImg} alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title"><strong>Education Track</strong></h5>
                                <p class="card-text">This track is for hackers who want to use AR/VR to facilitate education and the spreading of ideas in a way which uses the 3D aspect of AR/VR to make it easier to learn concepts and ideas.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div class="card">
                            <img class="card-img-top" src={entertainmentImg} alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title"><strong>Entertainment Track</strong></h5>
                                <p class="card-text">This track is for hackers who want to make AR/VR games or want use AR/VR in a creative and engaging way! </p>
                            </div>
                        </div>
                    </div>
                </div>

                <table className="Tracks-table table">
                    <tbody>
                        <tr className="Tracks-table-header-row">
                            <th id="th" colspan="5">
                                <h4 className="Tracks-table-header">Prizes</h4>
                            </th>
                        </tr>
                        <tr>
                            <td>Overall Best Use of AR/VR</td>
                            <td>Oculus Quest 2s</td>
                        </tr>
                        <tr>
                            <td>1st Place Winners of Track (Env)</td>
                            <td>Hydrate Smart Water Bottles</td>
                        </tr>
                        <tr>
                            <td>1st Place Winners of Track (Education)</td>
                            <td>Trello Educational Drones</td>
                        </tr>
                        <tr>
                            <td>1st Place Winners of Track (Healthcare)</td>
                            <td>Raspberry Pi Cana Kits</td>
                        </tr>
                        <tr>
                            <td>1st Place Winners of Track (Entertainment)</td>
                            <td>Chromecast Bundles</td>
                        </tr>
                        <tr>
                            <td>2nd Place Winners of Track (Healthcare)</td>
                            <td>Echo Dots</td>
                        </tr>
                        <tr>
                            <td>2nd Place Winners of Track (Entertainment)</td>
                            <td>Echo Dots</td>
                        </tr>
                        <tr>
                            <td>2nd Place Winners of Track (Education)</td>
                            <td>Sphero Minis</td>
                        </tr>
                        <tr>
                            <td>2nd Place Winners of Track (Environment)</td>
                            <td>Sphero Minis</td>
                        </tr>
                        <tr>
                            <td>3rd Place Winners of Track (Education)</td>
                            <td>Rocket Notebooks</td>
                        </tr>
                        <tr>
                            <td>3rd Place Winners of Track (Environment)</td>
                            <td>Rocket Notebooks</td>
                        </tr>
                        <tr>
                            <td>3rd Place Winners of Track (Healthcare)</td>
                            <td>Webcams</td>
                        </tr>
                        <tr>
                            <td>3rd Place Winners of Track (Entertainment)</td>
                            <td>Webcams</td>
                        </tr>
                        <tr>
                            <td>Best Use of Mobile AR</td>
                            <td>Bluetooth Phone Keyboards</td>
                        </tr>
                        <tr>
                            <td>Best Graphics / 3D Modeling by Reese Innovation Lab</td>
                            <td>Huion Drawing Tablets</td>
                        </tr>
                        <tr>
                            <td>Best Use of XR for Jounalism </td>
                            <td>Insta Nanos 360 Cameras</td>
                        </tr>
                        <tr>
                            <td>Best Use of XR Data Visualization</td>
                            <td>Insta Nano 360 Cameras</td>
                        </tr>
                        <tr>
                            <td>Best use of echoAR API</td>
                            <td><p>$50 Amazon Gift Card + Featured post</p>
                                <p>3 month free Business Tier access (per team member)</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Submission Raffel for Participation</td>
                            <td>Surprise!</td>
                        </tr>
                        <tr>
                            <td>Most Engaged Team for Participation</td>
                            <td>Surprise!</td>
                        </tr>
                        <tr>
                            <td>Talent Show for Engagement</td>
                            <td>Surprise!</td>
                        </tr>
                        <tr>
                            <td>Trivia Night Winner  for Engagement</td>
                            <td>Surprise!</td>
                        </tr>
                        <tr>
                            <td>Scavenger Hunt for Engagement</td>
                            <td>Surprise</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Tracks;