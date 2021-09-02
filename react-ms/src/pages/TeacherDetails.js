import React, { useState, useEffect } from "react";
import PageHeader from "../Components/PageHeader";
import "../Components/teachers/TeacherDetails.css";
import Footer from "./Footer";
import axios from "axios";

const TeachersDetails = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:8087/user/:R3mLd2xuRwBwJjMsGmgps")
        .then((res) => {
          setData(res.data);
        });
    }, 0);
  }, []);
  return (
    <>
      <PageHeader title="Details" style={{}} />
      <section className="team-details">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="team-details__content">
                <h2 className="team-details__title">Who am i?</h2>
                <p className="team-details__text">
                  Personal development coaching aims to evaluate these life
                  changes, whilst assessing your strengths and weaknesses to
                  improve certain areas of your life. Just as an athlete would
                  enlist a coach to train and support them in their sporting
                  goals, a personal development coach is there to support,
                  encourage and teach you expert techniques to make you feel at
                  ease and confident in changes you want to make in your life.
                  You deserve to be happy and proud of where you are. A coach
                  will help you achieve that happiness and develop any skills
                  you wish to improve
                </p>
                <h3 className="team-details__subtitle">Certificate</h3>

                <div className="progress-one__wrap">
                  <div className="progress-one__single">
                    <div className="progress-one__top">
                      <h3 className="progress-one__title">Arabic</h3>
                      <h3 className="progress-one__percent">
                        <span className="counter">98</span>%
                      </h3>
                    </div>
                    <div className="progress-one__bar">
                      <span
                        style={{ width: `98%` }}
                        className="wow slideInLeft"
                      ></span>
                    </div>
                  </div>
                  <div className="progress-one__single">
                    <div className="progress-one__top">
                      <h3 className="progress-one__title">French</h3>
                      <h3 className="progress-one__percent">
                        <span className="counter">64</span>%
                      </h3>
                    </div>
                    <div className="progress-one__bar">
                      <span
                        style={{ width: `64%` }}
                        className="wow slideInLeft"
                      ></span>
                    </div>
                  </div>
                  <div className="progress-one__single">
                    <div className="progress-one__top">
                      <h3 className="progress-one__title">English</h3>
                      <h3 className="progress-one__percent">
                        <span className="counter">34</span>%
                      </h3>
                    </div>
                    <div className="progress-one__bar">
                      <span
                        style={{ width: `34%` }}
                        className="wow slideInLeft"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src="/images/MK2.jpg" alt="" />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <a href="/team-details"> Mohamed Kamoun</a>
                  </h2>
                  <p className="team-one__designation">coach </p>
                </div>
                <div className="team-one__social">
                  <a href="#none">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TeachersDetails;
