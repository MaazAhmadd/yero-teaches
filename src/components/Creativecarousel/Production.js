import React from "react";
import SplitText from "react-pose-text";
const charPoses = {};

export default function Production() {
  return (
    <div className="section fp-section fp-tabble section_one">
      <div className="slider_container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider_content">
                <h6>
                  <span className="br"></span>
                  <SplitText charPoses={charPoses}>Production</SplitText>
                </h6>
                <h2>
                  <SplitText charPoses={charPoses}>
                    Music Production in Ableton Live
                  </SplitText>
                </h2>
                <p>
                  In 2021 I've had over 30k{" "}
                  <a
                    href="https://www.youtube.com/notyero"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>{" "}
                  views on my music. Save yourself years of googling, tutorial
                  watching and reddit scouring! I am excited to share everything
                  I've learned over the past decade of music making. Together we
                  will dive into the ins and outs of Ableton or DAW of your
                  choice, focus on whatever genre you want to produce, and help
                  you on your way to making quality music. Production
                  techniques, mixing, resources, releasing your music, the whole
                  thing.
                </p>
                <p className="tools">
                  <span className="software">Tools: </span>
                  Ableton/Logic/Pro Tools, Distrokid.
                </p>
                <a href="#Contact" className="see_btn" data-text="See Projects">
                  Start now
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
                  src={require("../../image/new-page/studio.webp")}
                  alt="3d studio"
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
