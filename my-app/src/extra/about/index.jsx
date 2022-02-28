import React from "react";
import "./style1.css";
import Header from "../../component/header";
// import image
import gfgLogo from "../../image/vasu2.png";
const Contact = () => {
  return (
    <>
      <Header />
      <section
        className="about-section"
        style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/2897907.jpg")`,
        }}
      >
        <div className="container-fluid p-0">
          <div className="row no-gutters position-relative">
            <div className="left-header d-none d-lg-block col-lg-3 col-xl-4">
              <div className="v-center-box d-flex align-items-end text-uppercase"></div>
            </div>
            <div
              className="col-lg-9 col-xl-8"
              style={{ backgroundColor: "white" }}
            >
              <div className="main-content p-5">
                <div className="main-header mb-4">
                  <h6
                    className="sub-heading text-uppercase d-block mb-2"
                    style={{ color: "black" }}
                  >
                    Who I am
                  </h6>
                  <h1
                    className="main-heading d-inline-block text-uppercase pb-3 border-bottom"
                    style={{ color: "black" }}
                  >
                    &lt; ABOUT THE CREATOR &gt;
                  </h1>
                </div>

                <div className="row mb-5">
                  <div className="mb-5 mb-sm-4 col-md-4">
                    <img src={gfgLogo} alt="image" style={{ width: "100%" }} />
                  </div>
                  <div className="col-md-8">
                    <div className="about__text mb-5 mb-sm-4 mb-md-4">
                      <h3 style={{ color: "blue" }}>I'm VASU</h3>
                      <p className="m-0" style={{ color: "black" }}>
                        am a hard working, honest individual. I am a good
                        timekeeper, always willing to learn new skills. I am
                        friendly, helpful and polite, have a good sense of
                        humour. I am able to work independently in busy
                        environments and also within a team setting. I am
                        outgoing and tactful, and able to listen effectively
                        when solving problems.
                      </p>
                    </div>
                    <div className="about__skills">
                      <div className="row no-gutters mb-0 mb-sm-4">
                        <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                          <div className="media">
                            <img src="https://img.icons8.com/ios-filled/50/000000/javascript.png" />
                            <div className="media-body">
                              <h4 className="m-0" style={{ color: "black" }}>
                                Javascript
                              </h4>
                              <p className="m-0" style={{ color: "black" }}>
                                1+ years of experience in Javascript which is a
                                lightweight, interpreted, object-oriented
                                language with first-class functions.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 mb-sm-0 pl-sm-3 col-sm-6 ">
                          <div className="media">
                            <img src="https://img.icons8.com/ios-glyphs/50/000000/react.png" />
                            <div className="media-body">
                              <h4 className="m-0" style={{ color: "black" }}>
                                React
                              </h4>
                              <p className="m-0" style={{ color: "black" }}>
                                6+ months of experience in React which is a
                                library for building composable user interfaces.
                                It encourages the creation of reusable UI
                                components, which present data that changes over
                                time
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row no-gutters mb-0 mb-sm-4">
                        <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                          <div className="media">
                            <img src="https://img.icons8.com/ios-filled/50/000000/html-5--v1.png" />
                            <div className="media-body">
                              <h4 className="m-0" style={{ color: "black" }}>
                                HTML
                              </h4>
                              <p className="m-0" style={{ color: "black" }}>
                                2+ years of experience in Html which is
                                hypertext markup language, a formatting system
                                for displaying material retrieved over the
                                Internet.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-0 pl-sm-3 col-sm-6">
                          <div className="media">
                            <img src="https://img.icons8.com/ios-filled/50/000000/css3.png" />
                            <div className="media-body">
                              <h4 className="m-0" style={{ color: "black" }}>
                                CSS
                              </h4>
                              <p className="m-0" style={{ color: "black" }}>
                                2+ years of experience in Cascading Style Sheets
                                which describes how HTML elements are to be
                                displayed on screen, paper, or in other media
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-data">
                  <div className="row no-gutters pt-5 border-top">
                    <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                      <div className="media">
                        <img
                          src="https://img.icons8.com/plasticine/100/000000/kawaii-coffee.png"
                          style={{ height: "50px" }}
                        />
                        <div className="media-body">
                          <p
                            className="data-number m-0 font-weight-bold"
                            style={{ color: "black" }}
                          >
                            10,950
                          </p>
                          <p
                            className="m-0 text-uppercase"
                            style={{ color: "black" }}
                          >
                            Cups of coffee
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                      <div className="media">
                        <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-coding-computer-technology-itim2101-lineal-color-itim2101.png" />
                        <div className="media-body">
                          <p
                            className="data-number m-0 font-weight-bold"
                            style={{ color: "black" }}
                          >
                            5,674,093
                          </p>
                          <p
                            className="m-0 text-uppercase"
                            style={{ color: "black" }}
                          >
                            Lines of code
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                      <div className="media">
                        <img src="https://img.icons8.com/bubbles/50/000000/instagram-new--v2.png" />
                        <div className="media-body">
                          <p
                            className="data-number m-0 font-weight-bold"
                            style={{ color: "black" }}
                          >
                            381 followers
                          </p>
                          <p
                            className="m-0 text-uppercase"
                            style={{ color: "black" }}
                          >
                            Let's connect
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                      <div className="media">
                        <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-player-sport-avatar-justicon-flat-justicon.png" />
                        <div className="media-body">
                          <p
                            className="data-number m-0 font-weight-bold"
                            style={{ color: "black" }}
                          >
                            178
                          </p>
                          <p
                            className="m-0 text-uppercase"
                            style={{ color: "black" }}
                          >
                            Badminton Wins
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
