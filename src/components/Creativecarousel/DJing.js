import React from "react";
import SplitText from "react-pose-text";

const charPoses = {};

export default function DJing() {
  return (
    <div className="section fp-section fp-tabble section_one">
      <div className="slider_container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider_content slider_content_three">
                <h6>
                  <span className="br"></span>
                  <SplitText charPoses={charPoses}>DJing</SplitText>
                </h6>
                <h2>
                  <SplitText charPoses={charPoses}>
                    Learn to DJ with any genre
                  </SplitText>
                </h2>
                <p>
                  I started{" "}
                  <a
                    href="https://cargocollective.com/notYero/WHERE-I-VE-PLAYED"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DJing
                  </a>{" "}
                  in 2017 and have since played at clubs, events and festivals.
                  DJing is not as difficult nor as easy as it seems. Learn how
                  to find, analyze, organize and mix tracks in any software/DJ
                  mixer of your preference. Whether you are just starting out or
                  want to level up your skills, I will teach you different
                  mixing techniques and show the tips and tricks I've learned
                  over the years to have you ready for the club or covid-safe
                  house party in no time!
                </p>
                <p className="tools">
                  <span className="software">Tools: </span>
                  Rekordbox/Traktor
                </p>
                <a href="#Contact" className="see_btn" data-text="Start Now">
                  Start Now
                  <span className="arrow">
                    <span className="line"></span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider_image_inner">
                <span></span>
                <img
                  src={require("../../image/new-page/djmixer.webp")}
                  alt="dj mixer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
