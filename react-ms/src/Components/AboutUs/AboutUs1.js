import React from "react";
import "./AboutUs1.css";

const AboutUs1 = () => {
  return (
    <div>
      <section className="contact-info-one" id="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-manager"></i>
                </div>
                <h2 className="contact-info-one__title">Who are we? </h2>
                <p className="contact-info-one__text">
                  Mastery Share is a streaming platform that assures remote
                  access to educational content. <br />
                  It allows anyone to watch or listen to video lessons taught by
                  the best formers in each field.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-placeholder"></i>
                </div>
                <h2 className="contact-info-one__title">What we Offer?</h2>
                <p className="contact-info-one__text">
                  The main objective is to provide a powerful platform
                  accessible to all Tunisians which on the one hand allows users
                  to be inspired by the content, to learn new skills and to make
                  discoveries.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-contact"></i>
                </div>
                <h2 className="contact-info-one__title">Contact Us</h2>
                <p className="contact-info-one__text">
                  Support@MasteryShare.com <br />
                  93467287
                  <br /> &nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-one">
        <div className="container">
          <h2 className="contact-one__title text-center">
            Get in touch <br />
            with us
          </h2>
          <form
            action="#"
            className="contact-one__form contact-form-validated"
            noValidate="novalidate"
          >
            <div className="row low-gutters">
              <div className="col-lg-6">
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Email Address" name="email" />
              </div>
              <div className="col-lg-12">
                <textarea placeholder="Write Message" name="message"></textarea>
                <div className="text-center">
                  <button type="submit" className="contact-one__btn thm-btn">
                    Submit Comment
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="result text-center"></div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.748493898494!2d10.626107315115823!3d35.83064598015972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ5JzUwLjMiTiAxMMKwMzcnNDEuOSJF!5e0!3m2!1sfr!2stn!4v1619484024694!5m2!1sfr!2stn"
        className="google-map__contact"
        title="template google map"
        allowFullScreen=""
      ></iframe>
    </div>
  );
};

export default AboutUs1;
