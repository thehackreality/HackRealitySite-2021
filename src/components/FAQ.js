import React, { Component } from 'react';
import '../styles/FAQ.css';

class FAQ extends Component {
  render() {
    return (
      <div id="faq" className="FAQ container site-section">
        <div className="accordion" id="accordionExample">
          <h1 className="section-header">FAQ</h1>
          <div className="row">
            <div className="FAQ-column col-md-6 col-sm-12">
              <div className="card">
                <div className="card-header" id="headingFourteen">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFourteen"
                      aria-expanded="true"
                      aria-controls="collapseFourteen"
                    >
                      What is a hackathon?
                        </button>
                  </h2>
                </div>
                <div
                  id="collapseFourteen"
                  className="collapse"
                  aria-labelledby="headingFourteen"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p className="card-text">
                      A hackathon is usually a 24-48 hour event where people with
                      ideas and talents get together and collaborate on a project.
                      In this time frame, hackers ideate, build and deliver a
                      “prototype”. Hackers also compete for prizes, get free swag
                      and make lasting memories.
                        </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is an XR hackathon?
                        </button>
                  </h2>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p className="card-text">
                      XR hackathons are very similar to regular hackathons, except
                      attendees make applications using Augmented or Virtual
                      Reality technologies. You can make applications for mobile
                      platforms, web, or AR/VR headsets.
                        </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      Who Can Attend?
                        </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p className="card-text">
                      Anyone over 18 is welcome to register!
                        </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwenty">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwenty"
                      aria-expanded="false"
                      aria-controls="collapseTwenty"
                    >
                      When and where will be event be held?
                        </button>
                  </h2>
                </div>
                <div
                  id="collapseTwenty"
                  className="collapse"
                  aria-labelledby="headingTwenty"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p className="card-text">
                      HackReality 2021 will take place March 12 - 19. All meetings and events are held remotely. Communication will be on Discord. For more details, please refer to the event guideline that is going to be sent out to all participants prior to the event.
                        </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Never Coded / Never Coded For XR?
                        </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p className="card-text">
                      HackReality does not require any prior XR or coding
                      knowledge. People of all backgrounds are encouraged to
                      apply! If you are interested in animation, storytelling, or
                      are passionate about XR, please join us! Our workshops will
                      teach you the basic skills needed to develop your own XR
                      project and we will have mentors at hand to guide you.
                        </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="FAQ-column col-md-6 col-sm-12">
              <div className="card">
                <div className="card-header" id="headingSeven">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      Can I use old code/projects?
                        </button>
                  </h2>
                </div>
                <div
                  id="collapseSeven"
                  className="collapse"
                  aria-labelledby="headingSeven"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p className="card-text">
                      Old code or projects cannot be used during this hackathon.
                      You can use external APIs, packages or libraries, but all your code needs to be
                      written during the hackathon.
                        </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFive">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      What if I don't have a team?
                        </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p className="card-text">
                      Hacking in a team is highly encouraged but not a
                      requirement! We will also have an opportunity for
                      team-building before the event starts.
                        </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingSix">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Do I need my own XR equipment?
                        </button>
                  </h2>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="headingSix"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p className="card-text">
                      While having your equipment or working with a teammate who does is encouraged, it is not required. XR is available in all platforms and mediums from Web based apps to mobile apps thus you are not limited by hardware. If you wish to work with someone who has VR/AR headsets, we will do our best to pair you with a teammate who does.
                        </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingEleven">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseEleven"
                      aria-expanded="false"
                      aria-controls="collapseEleven"
                    >
                      I don't know what to make?
                        </button>
                  </h2>
                </div>
                <div
                  id="collapseEleven"
                  className="collapse"
                  aria-labelledby="headingEleven"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p className="card-text">
                      If you are having trouble coming up with an idea or need
                      help refining one, make sure to check out our design
                      thinking workshop and speak with our mentors who are
                      experienced in XR development.
                        </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwentyOne">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwentyOne"
                      aria-expanded="false"
                      aria-controls="collapseTwentyOne"
                    >
                      How will I get prizes and swag?
                        </button>
                  </h2>
                </div>
                <div
                  id="collapseTwentyOne"
                  className="collapse"
                  aria-labelledby="headingTwentyOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <p className="card-text">
                      We will not deliver any swag for this hackathon being a remote event. HackReality team would reach out to all the prize winners after the hackathon to discuss the logistics of prize ordering and delivery.                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="section-header">Guidelines</h1>
          <div className="row" id="guidelines">
            <div className="FAQ-column col-md-12">
              <div className="FAQ-wide card">
                <div className="card-header" id="headingThirteen">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThirteen"
                      aria-expanded="false"
                      aria-controls="collapseThirteen"
                    >
                      Honor Code
                        </button>
                  </h2>
                </div>
                <div
                  id="collapseThirteen"
                  className="collapse"
                  aria-labelledby="headingThirteen"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <ul className="card-text" id="honor-code">
                      <li>
                        HackReality is all-inclusive. Please respect your fellow
                        peers, organizers, mentors - basically everyone in the
                        event! Value the work of your teammates and all the
                        participants. Please express appreciation to anyone who
                        helped you and the ones who put this event together!
                          </li>
                      <li>Any form of harrassment is not tolerated.</li>
                      <li>
                        No inflammatory content on any of the communication
                        channels.
                          </li>
                      <li>
                        If you are a participant, no recruiting for your startup,
                        company, job, or organization. If you want to do so,
                        please contact our sponsorship team for a recruitment
                        package. However sponsors cannot be participants.
                          </li>
                      <li>
                        Old code and old projects are not allowed. All the code
                        must be written after the hackathon begins. Do not use
                        illegal/pirated content. Do not produce
                        unethical/inflammatory content that violates the honor
                        code.
                          </li>
                      <li>
                        Violation of any terms of conduct will
                        result in immediate disqualification.
                          </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;