import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import About from "./About";
import Production from "./Production";
import FilmComposing from "./FilmComposing";
import GameComposing from "./GameComposing";
import DJing from "./DJing";
import CreativeContent from "./CreativeContent";
import Contact from "./Contact";
import Navbar from "./Navbar";
// const ReactFullpage = require("@fullpage/react-fullpage");

export default function FullpageSlider(fullpageProps) {
  return (
    <div className="scroll_page">
      <Navbar />
      <ReactFullpage
        {...fullpageProps}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <About />
              <Production />
              <CreativeContent />
              <FilmComposing />
              <GameComposing />
              <DJing />
              <Contact />
            </>
          );
        }}
      />
      <div
        className="section_bg"
        style={{
          background: "linear-gradient( 90deg, #f66962 0%, #f78232 100%)",
          position: "absolute",
          height: "100%",
          width: "100%",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      >
        <ul
          data-relative-input="true"
          className="list-unstyled memphis"
          id="scene"
        >
          <li>
            <img
              srcSet={require("../../image/new-page/line1.png")}
              width="969px"
              height="746px"
              alt=""
            />
          </li>
          <li>
            <img
              srcSet={require("../../image/new-page/line2.png")}
              width="903px"
              height="718px"
              alt=""
            />
          </li>
          <li>
            <img
              srcSet={require("../../image/new-page/line3.png")}
              width="727px"
              height="858px"
              alt=""
            />
          </li>
          <li>
            <img
              srcSet={require("../../image/new-page/topshape2.png")}
              width="483px"
              height="298px"
              alt=""
            />
          </li>
          <li>
            <img
              className="layer layer2"
              data-depth="0.2"
              width="235px"
              height="270px"
              srcSet={require("../../image/new-page/shape1.png")}
              alt=""
            />
          </li>
          <li>
            <img
              srcSet={require("../../image/new-page/shape2.png")}
              width="235px"
              height="270px"
              alt=""
            />
          </li>
          <li>
            <img
              srcSet={require("../../image/new-page/bottomshape.png")}
              width="495px"
              height="169px"
              alt=""
            />
          </li>
          <li>
            <img
              srcSet={require("../../image/new-page/arrow.png")}
              width="72px"
              height="118px"
              alt=""
            />
          </li>
          <li>
            <img
              srcSet={require("../../image/new-page/triangle.png")}
              width="69px"
              height="59px"
              alt=""
            />
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
