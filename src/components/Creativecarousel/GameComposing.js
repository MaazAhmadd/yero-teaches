import React from "react";
import SplitText from "react-pose-text";

const charPoses = {};

export default function GameComposing() {
  return (
    <div className="section fp-section fp-tabble">
      <div className="slider_container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider_content slider_content_two">
                <h6>
                  <span className="br"></span>
                  <SplitText charPoses={charPoses}>
                    Game Composition + Sound Design
                  </SplitText>
                </h6>
                <h2 className="games">
                  <SplitText charPoses={charPoses}>
                    Music composition & Sound Design
                  </SplitText>
                </h2>
                <h2 className="bold">
                  <SplitText charPoses={charPoses}>for video games</SplitText>
                </h2>
                <p>
                  When it comes to video games, the music is more interactive,
                  split between thematic, adaptive and incidental/ambient. You
                  will learn what each of these require, and how to keep the
                  interplay of sound design and music in mind. I will also teach
                  you a bit of sound design in your DAW, how to implement audio
                  in Unity... and of course, how to make 8-bit music!
                </p>
                <p className="tools">
                  <span className="software">Tools: </span>
                  Ableton/DAW of your choice, Native Instruments Kontakt, Unity,
                  FMOD
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
                  src={require("../../image/new-page/gamesimg.webp")}
                  alt="supermario 8-bit notes"
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
