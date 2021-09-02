import React from "react";
import "./Grid.css";

function Grid() {
  return (
    <section className="about-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-two__content">
              <div className="block-title text-left">
                <h2 className="about-two__text1">
                  Welcome to <br />
                  Mastery Share
                </h2>
              </div>
              <p className="about-two__text">
                The n°1 streaming platform In Tunisia that assures tele-tutoring
                For You To Follow Your Passion.
              </p>
              <div className="about-two__single-wrap">
                <div className="about-two__single">
                  <div className="about-two__single-icon">
                    <i className="fas fa-chalkboard-teacher"></i>
                  </div>
                  <div className="about-two__single-content">
                    <p className="about-two__single-text">
                      Start learning from our experts
                    </p>
                  </div>
                </div>
                <div className="about-two__single">
                  <div className="about-two__single-icon">
                    <i className="far fa-lightbulb"></i>
                  </div>
                  <div className="about-two__single-content">
                    <p className="about-two__single-text">
                      Enhance your skills with us now
                    </p>
                  </div>
                </div>
                <img className="wallpaper" src="/images/bt.jpg"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid;
