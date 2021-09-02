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
                  The School of Skate operates four skateboarding schools across
                  London. We started group skateboarding lessons in 2017 when
                  the new skatepark opened in Charlton Park, in London SE7. We
                  have since expanded, starting group lessons at Folkestone
                  Gardens skatepark, Deptford in 2020, and starting Victoria
                  Park skatepark and Whitegrounds, London Bridge in 2021. We
                  provide both beginner and progressing skateboarding lessons.
                  We teach boys, girls, and adults from 5 years old upwards with
                  a wide range of abilities. We can provide skateboards all
                  safety equipment.
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
                  <img src="/images/skating.jpg" alt="" />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <a href="/team-details"> Blackout team</a>
                  </h2>
                  <p className="team-one__designation">Club </p>
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
