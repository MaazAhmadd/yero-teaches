import React from "react";
import SplitText from "react-pose-text";

const charPoses = {};

export default function FilmComposing() {
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
                    Film + Advertisement Scoring
                  </SplitText>
                </h6>
                <h2>
                  <SplitText charPoses={charPoses}>
                    Music composition for
                  </SplitText>
                </h2>
                <h2 className="bold games">
                  <SplitText charPoses={charPoses}>
                    film + advertisements
                  </SplitText>
                </h2>
                <p>
                  I have 20+ composer credits on{" "}
                  <a
                    href="http://www.imdb.com/name/nm5614189/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IMDB
                  </a>{" "}
                  and a{" "}
                  <a
                    href="https://yeropharaoh.com/BENU-TV-Commercial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TV advertisement
                  </a>{" "}
                  to boot. I strongly believe that having some musical talent,
                  understanding what the scene needs emotionally and
                  understanding some music theory is enough to create a quality
                  score. Learn everything I know about making music for either
                  or both film and advertisements.
                </p>
                <p className="tools">
                  <span className="software">Tools: </span>
                  Ableton/DAW of your choice, Native Instruments Kontakt
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
                  src={require("../../image/new-page/pianonobk3d.webp")}
                  alt="3d piano"
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
