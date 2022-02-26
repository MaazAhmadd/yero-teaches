import React from "react";
import Reveal from "react-reveal/Reveal";
import Form from "../Form";

export default function Contact() {
  return (
    <div className="section fp-section fp-tabble section_one contact-area">
      <div id="contact-box" className="slider_container">
        <div className="container">
          <div className="row row-reverse">
            <div className="col-md-5">
              <Reveal effect="fadeInLeft" duration={500}>
                <div className="contact_info">
                  <h4>Contact Info</h4>
                  <ul className="nav">
                    <li className="item">
                      <div className="media">
                        <a
                          className="icona"
                          href="mailto:yeroteaches@gmail.com"
                          data-rel="external"
                        >
                          <i className="icon_pin_alt"></i>
                        </a>
                        <div className="media-body">
                          <a
                            href="mailto:yeroteaches@gmail.com"
                            data-rel="external"
                          >
                            Address: Breda, The Netherlands + The Internet
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="item">
                      <div className="media">
                        <a
                          className="icona"
                          href="tel:+31617124327"
                          data-rel="external"
                        >
                          <i className="icon_phone"></i>
                        </a>
                        <div className="media-body">
                          <a href="tel:+31617124327" data-rel="external">
                            Phone: +316.17.12.43.27
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="item">
                      <div className="media">
                        <a
                          className="icona"
                          href="mailto:yeroteaches@gmail.com"
                          data-rel="external"
                        >
                          <i className="icon_mail"></i>
                        </a>
                        <div className="media-body">
                          <a
                            href="mailto:yeroteaches@gmail.com"
                            data-rel="external"
                          >
                            Email: yeroteaches@gmail.com
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
            <div className="col-md-7">
              <Reveal effect="fadeInRight" duration={800}>
                <div className="input_form">
                  <h4>Send A Message</h4>
                  <p className="msgprompt">
                    Send me a message and we will have a free 20 min talk online
                    and figure out a plan and a price for what you need{" "}
                    <span role="img" aria-label="sparkle">
                      ✨
                    </span>
                  </p>
                  <Form />
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <section className="footer-area copy">
          <div className="container">
            <div className="footer-content">
              <p className="copyright">
                © {new Date().getFullYear()} Yero Academy - All Rights Reserved
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
