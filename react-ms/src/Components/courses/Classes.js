import React from "react";
import { Button } from "../Button/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Mk from "../classesdetails/Mk";
import { Link } from "react-router-dom";

const Classes = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      axios.get(" http://localhost:8087/course").then((res) => {
        setData(res.data);
      });
    }, 0);
  }, []);

  return (
    <div className="cards__container">
      <section className="course-one course-page">
        <div className="container container-bottom">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="col-lg-3">
                <div className="course-one__single">
                  <div className="course-one__image">
                    <img src="/images/MK.jpg" alt="" />
                  </div>
                  <div className="course-one__content">
                    <a href="/CourseDetails" className="course-one__category">
                      Wellness
                    </a>
                    <div className="course-one__admin">
                      <img src="/images/MK.png" alt="" />
                      by <a href="/Mk">Mohamed Kamoun</a>
                    </div>
                    <h2 className="course-one__title">
                      <a href="/Mk">Public speaking</a>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">4.9</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/CourseDetails">
                        <i className="far fa-clock"></i> 6h
                      </a>
                      <a href="/CourseDetails">
                        <i className="far fa-folder-open"></i>4
                      </a>
                    </div>
                    <Button to={"/Mk  "} className="contact-one__btn ">
                      See preview
                    </Button>
                    <Button
                      to={"/Panel"}
                      className="btns"
                      buttonStyle="btn--outline"
                      buttonSize="btn--large"
                    >
                      Buy
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="col-lg-3">
                <div className="course-one__single">
                  <div className="course-one__image">
                    <img src="/images/BK.png" alt="" />
                  </div>
                  <div className="course-one__content">
                    <a href="/Skate" className="course-one__category">
                      Sports and gaming
                    </a>
                    <div className="course-one__admin">
                      <img src="/images/MK.png" alt="" />
                      by <a href="/TeacherDetails">Blackout team</a>
                    </div>
                    <h2 className="course-one__title">
                      <a href="/Skate">beginner skate</a>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">5</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/Skate">
                        <i className="far fa-clock"></i> 3h
                      </a>
                      <a href="/Skate">
                        <i className="far fa-folder-open"></i>6
                      </a>
                    </div>
                    <Button to={"/Skate"} className="contact-one__btn ">
                      See preview
                    </Button>
                    <Button
                      to={"/Panels"}
                      className="btns"
                      buttonStyle="btn--outline"
                      buttonSize="btn--large"
                    >
                      Buy
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div className="col-lg-3">
                <div className="course-one__single">
                  <div className="course-one__image">
                    <img src="/images/oui.jpg " alt="" />
                  </div>
                  <div className="course-one__content">
                    <a href="/Write" className="course-one__category">
                      Lifestyle
                    </a>
                    <div className="course-one__admin">
                      <img src="/images/  " alt="" />
                      by <a href="/Write">Ahmed belaid</a>
                    </div>
                    <h2 className="course-one__title">
                      <a href="/Write">Writing basics</a>
                    </h2>
                    <div className="course-one__stars">
                      <span className="course-one__stars-wrap">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="course-one__count">5</span>
                    </div>
                    <div className="course-one__meta">
                      <a href="/Write">
                        <i className="far fa-clock"></i> 3h
                      </a>
                      <a href="/Write">
                        <i className="far fa-folder-open"></i>7
                      </a>
                    </div>
                    <Button to={"/Write"}>See preview</Button>
                    <Button
                      to={"/Panel"}
                      className="btns"
                      buttonStyle="btn--outline"
                      buttonSize="btn--large"
                    >
                      Buy
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wat">
          <Button
            to={"/Courses"}
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            See More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Classes;
