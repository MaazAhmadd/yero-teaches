import React, { useState } from "react";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  // constructor() {
  //   super();
  //   this.state = {
  //     isExpanded: false,
  //   };
  // }

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  // render() {
  return (
    <>
      <header className="header_area_one p_absoulte">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-9 col-7">
              <div className="menu_left">
                <a href="/#Hi👋" className="logo">
                  <img
                    src={require("../../image/logo2.webp")}
                    width="60px"
                    height="70px"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-3 col-5">
              <div className="menu_right">
                <div className="burger_menu">
                  <span className="text" data-text="menu"></span>
                  <div
                    id="nav-icon2"
                    className={isExpanded ? "open" : ""}
                    onClick={handleToggle}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={isExpanded ? "offcanvas_menu open" : "offcanvas_menu"}>
        <div className="closer_icon" onClick={handleToggle}>
          <i className="icon_close"></i>
        </div>
        <div className="menu_body">
          <div className="menu_title">
            <h2>Welcome to Yero Academy</h2>
            <p>Learn everything I know from 10+ years of audio experience!</p>
          </div>
          <div className="off_menu">
            <ul id="menu" className="nav">
              <li data-menuanchor="About" className="">
                <a href="#Hi👋">About Me</a>
              </li>
              <li data-menuanchor="MusicProduction" className="">
                <a href="#Production">Music Production</a>
              </li>
              <li data-menuanchor="Audio" className="">
                <a href="#Creative">Audio for Content Creation</a>
              </li>
              <li data-menuanchor="Composition" className="">
                <a href="#Film+Ads">
                  Music Composition for Film + Advertisments
                </a>
              </li>
              <li data-menuanchor="GameAudio" className="">
                <a href="#Games">Game Composition + Sound design</a>
              </li>
              <li data-menuanchor="DJing" className="">
                <a href="#DJing">DJing</a>
              </li>
              <li data-menuanchor="Contact" className="">
                <a href="#Contact">Contact</a>
              </li>
              <li className="">
                <a
                  href="https://www.instagram.com/yero_the_afropean/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="social_instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="copy_right_menu">
            <p>
              © <a href="/#">Yero Academy</a> {new Date().getFullYear()}. All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
  // }
};
export default Navbar;
