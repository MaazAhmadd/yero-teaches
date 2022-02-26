import SplitText from "react-pose-text";
import React from "react";

const charPoses = {};

export default function CreativeContent() {
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
                    Audio for Content Creation
                  </SplitText>
                </h6>
                <h2>
                  <SplitText charPoses={charPoses}>Audio for</SplitText>
                </h2>
                <h2 className="bold">
                  <SplitText charPoses={charPoses}>Content Creation</SplitText>
                </h2>
                <p>
                  Did you just start a YouTube channel, TikTok page or podcast
                  and wonder why your work doesn't sound as good as the
                  competition? It can seem complex but I promise to make it easy
                  for you in the long run. I will teach you best practices for
                  recording and editing your audio into pristine quality.
                </p>
                <p className="tools">
                  <span className="software">Tools: </span>
                  Adobe Audition/DAW of your choice
                </p>
                <a href="#Contact" className="see_btn" data-text="See Projects">
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
                  src={require("../../image/new-page/audiolisten.webp")}
                  alt=""
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
