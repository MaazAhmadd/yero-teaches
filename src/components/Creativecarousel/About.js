import React from "react";
import Fade from "react-reveal/Fade";
import SplitText from "react-pose-text";
const charPoses = {};

const About = () => {
  return (
    <div className="section fp-section fp-tabble section_one">
      <div className="slider_container">
        <div className="container">
          <section className="footer-area">
            <div className="container">
              <div className="footer-content">
                <Fade top cascade>
                  <ul className="list_style">
                    <li>
                      <a
                        href="https://www.instagram.com/yero_the_afropean/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="social_instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/notyero"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="social_youtube"></i>
                      </a>
                    </li>
                    {/* <li>
                            <a href="https://www.linkedin.com/in/yeropharaoh/">
                                <i className="social_linkedin"></i>
                            </a>
                        </li> */}
                    <li>
                      <a
                        href="https://files.cargocollective.com/545601/YeroPharaoh_CV_2020.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className=" icon_document_alt" alt="resume"></i>
                      </a>
                    </li>
                  </ul>
                </Fade>
              </div>
            </div>
          </section>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider_image_inner aboutpic">
                <span></span>
                <img
                  src={require("../../image/new-page/mee.webp")}
                  alt="pic of me"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="slider_content">
                <h6>
                  <span className="br"></span>
                  <SplitText charPoses={charPoses}>About Me</SplitText>
                </h6>
                <h2>
                  <SplitText charPoses={charPoses}>Yero Teaches</SplitText>
                </h2>
                <p className="abouttext">
                  I am a self-taught audio, content and party maker with 10+
                  years of experience that I'm eager to share! Be it{" "}
                  <a href="#Production">producing</a>,{" "}
                  <a href="#Film+Ads">scoring films + advertisements</a>,{" "}
                  <a href="#DJing">DJing</a>,{" "}
                  <a href="#Games">music + sound design for games</a>, or
                  getting your <a href="#Creative">creative content</a> sounding
                  pro, I've got you covered! Have a look below at what I have to
                  offer ⤵
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
