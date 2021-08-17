import React, { Component } from 'react';
import '../styles/Schedule.css'

class Schedule extends Component {
    render() {
        return (
            <div className="Schedule container site-section">
                <h1 className="Schedule-header">
                    Schedule
                </h1>
                <table className="table">
                    <tbody>
                        <tr className="Schedule-table-header-row">
                            <th colspan="2">
                                <h4 className="Schedule-table-header">Friday</h4>
                            </th>
                        </tr>
                        <tr>
                            <td>6:30 - 7:30 PM</td>
                            <td>Check-In & Team Formation 1 (On Discord)</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr className="Schedule-table-header-row">
                            <th colspan="2">
                                <h4 className="Schedule-table-header">Saturday</h4>
                            </th>
                        </tr>
                        <tr>
                            <td>10 - 11 AM</td>
                            <td>Opening Ceremony</td>
                        </tr>
                        <tr>
                            <td>11 AM - 12 PM</td>
                            <td>Team Formation 2</td>
                        </tr>
                        <tr>
                            <td>12 PM</td>
                            <td>Hacking Begins</td>
                        </tr>
 
                        <tr>
                            <td>1 - 2 PM</td>
                            <td>echoAR: How to Build a Cloud-Connected AR/VR App in 15 Minutes or Less (for beginners)</td>
                        </tr>
                        <tr>
                            <td>2 - 3 PM</td>
                            <td>Build a Basic Web AR Project with AR.js (for beginners)</td>
                        </tr>
                        <tr>
                            <td>3:30 - 4:30 PM</td>
                            <td>Workshop 3</td>
                        </tr>
                        <tr>
                            <td>8 - 9 PM</td>
                            <td>How to build an AR app with Unity (for beginners)</td>
                        </tr>
                        <tr>
                            <td>9:30 - 10:30 PM</td>
                            <td>Among Us</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr className="Schedule-table-header-row">
                            <th colspan="2">
                                <h4 className="Schedule-table-header">Sunday</h4>
                            </th>
                        </tr>
                        <tr>
                            <td>12 - 1 PM</td>
                            <td>Surreal Hacker Putluck</td>
                        </tr>
                        <tr>
                            <td>1 - 2 PM</td>
                            <td>Workshop 5</td>
                        </tr>
                        <tr>
                            <td>2:30 - 3:30 PM</td>
                            <td>Workshop 6</td>
                        </tr>
                        <tr>
                            <td>5 - 6 PM</td>
                            <td>Trivia Game Night</td>
                        </tr>
                        <tr>
                            <td>6 - 7:30 PM</td>
                            <td>Workshop 7</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr className="Schedule-table-header-row">
                            <th colspan="2">
                                <h4 className="Schedule-table-header">Monday</h4>
                            </th>
                        </tr>
                        <tr>
                            <td>1 - 2 PM</td>
                            <td>ntro to VR with Mozilla Spoke (for beginners)</td>
                        </tr>
                        <tr>
                            <td>4 - 5 PM</td>
                            <td>XR Performance/Optimization Workshop</td>
                        </tr>
                        <tr>
                            <td>7 - 8 PM</td>
                            <td>Unreal Blueprint/Programming Basics Session by Reese Innovation Lab</td>
                        </tr>
                        <tr>
                            <td>8 - 9 PM</td>
                            <td>Scribble.io</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr className="Schedule-table-header-row">
                            <th colspan="2">
                                <h4 className="Schedule-table-header">Tuesday</h4>
                            </th>
                        </tr>
                        <tr>
                            <td>12 - 1 PM</td>
                            <td>Project Feedback</td>
                        </tr>
                        <tr>
                            <td>4 - 5 PM</td>
                            <td>Game Developer Opportunities in XR</td>
                        </tr>
                        <tr>
                            <td>5:30 - 7 PM</td>
                            <td>Sponsor Fair</td>
                        </tr>
                        <tr>
                            <td>7 - 8 PM</td>
                            <td>Workshop 10</td>
                        </tr>
     
                    </tbody>

                    <tbody>
                        <tr className="Schedule-table-header-row">
                            <th colspan="2">
                                <h4 className="Schedule-table-header">Wednesday</h4>
                            </th>
                        </tr>
                        <tr>
                            <td>1 - 2 PM</td>
                            <td>Casual Project Showcase</td>
                        </tr>
                        <tr>
                            <td>7 - 8 PM</td>
                            <td>Talent Show</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr className="Schedule-table-header-row">
                            <th colspan="2">
                                <h4 className="Schedule-table-header">Thursday (Hacking Day)</h4>
                            </th>
                        </tr>
                        <tr>
                            <td>1 - 3 PM</td>
                            <td>On-site interview (Reese Innovation Lab)</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr className="Schedule-table-header-row">
                            <th colspan="2">
                                <h4 className="Schedule-table-header">Friday</h4>
                            </th>
                        </tr>
                        <tr>
                            <td>12 - 1 PM</td>
                            <td>Hacking Ends / Closing Ceremony</td>
                        </tr>
                        <tr>
                            <td>1 - 4 PM</td>
                            <td>Judging</td>
                        </tr>
                        <tr>
                            <td>4:30 - 5:30 PM</td>
                            <td>Winners Announced via Discord & Devpost</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Schedule;