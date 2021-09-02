import React, { useState, useEffect } from "react";
import "../courses/CourseDetails.css";
import PageHeader from "../PageHeader";
import axios from "axios";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (value) => {
    setActiveTab(value);
  };
  const [data, setData] = useState(null);

  return (
    <>
      <PageHeader title="Courses Details" style={{}} />

      <section className="course-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-details__content">
                <p className="course-details__author">
                  <img src="/images/oui.jpg" alt="" />
                  by <a href="/TeacherDetails">Ahmed belaid</a>
                </p>

                <div className="course-details__top">
                  <div className="course-details__top-left">
                    <h2 className="course-details__title">Article writing</h2>
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
                  </div>
                  <div className="course-details__top-right">
                    <a href="#none" className="course-one__category">
                      lifestyle
                    </a>
                  </div>
                </div>
                <div className="course_image">
                  <img src="/images/teacher.jpg" alt="" />
                </div>

                <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
                  <li>
                    <a
                      className={activeTab === 0 ? "active" : null}
                      role="tab"
                      data-toggle="tab"
                      onClick={() => handleChange(0)}
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeTab === 1 ? "active" : null}
                      role="tab"
                      data-toggle="tab"
                      onClick={() => handleChange(1)}
                    >
                      Videos
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeTab === 2 ? "active" : null}
                      role="tab"
                      data-toggle="tab"
                      onClick={() => handleChange(2)}
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
                <div className="tab-content course-details__tab-content ">
                  <div
                    className="tab-pane show active  animated fadeInUp"
                    role="tabpanel"
                    id="overview"
                  >
                    {activeTab === 0 && (
                      <p className="course-details__tab-text">
                        Many a time you have seen some writers or people write
                        their problems and suggestions in some newspapers,
                        magazines, and journals or in their blogs. They are
                        writing their opinions and beliefs in the form of an
                        article. In this section, we will get ourselves familiar
                        with article writing and the article writing format.
                      </p>
                    )}
                    {activeTab === 1 && (
                      <div className="sidebar__single sidebar__category">
                        <h3 className="sidebar__title">Videos</h3>
                        <ul className="sidebar__category-list">
                          <li className="sidebar__category-list-item">
                            <a href="/VideoPlayer">Class 1</a>
                          </li>
                          <li className="sidebar__category-list-item">
                            <a href="/VideoPlayer">Class 2</a>
                          </li>
                          <li className="sidebar__category-list-item">
                            <a href="/VideoPlayer"> Class 3</a>
                          </li>
                          <li className="sidebar__category-list-item">
                            <a href="/VideoPlayer">Class 4</a>
                          </li>
                          <li className="sidebar__category-list-item">
                            <a href="/VideoPlayer">Class 5</a>
                          </li>
                          <li className="sidebar__category-list-item">
                            <a href="/VideoPlayer">Class 6</a>
                          </li>
                          <li className="sidebar__category-list-item">
                            <a href="/VideoPlayer">Class 7</a>
                          </li>
                          <li className="sidebar__category-list-item">
                            <a href="/VideoPlayer">Class 8</a>
                          </li>
                          <li className="sidebar__category-list-item">
                            <a href="/VideoPlayer">Class 9</a>
                          </li>
                        </ul>
                      </div>
                    )}
                    {activeTab === 2 && (
                      <>
                        <div className="comment-one">
                          <div className="comment-one__single">
                            <div className="comment-one__image">
                              <div className="inner-block">
                                <img
                                  src="/images/law.png"
                                  alt="Awesome alter text"
                                />
                              </div>
                            </div>
                            <div className="comment-one__content">
                              <div className="comment-one__content-top">
                                <div className="comment-one__top-left">
                                  <h3 className="comment-one__author">
                                    Ahmed Belaid
                                  </h3>
                                  <p className="comment-one__date">
                                    20 April, 2021{" "}
                                    <span className="comment-one__date-sep">
                                      -
                                    </span>{" "}
                                    4:00 pm
                                  </p>
                                  <p className="comment-one__text">
                                    Ahmed BelaidAhmed BelaidAhmed BelaidAhmed
                                    BelaidAhmed BelaidAhmed BelaidAhmed
                                    BelaidAhmed BelaidAhmed BelaidAhmed
                                  </p>
                                </div>
                                <div className="comment-one__top-right">
                                  <a
                                    href="#none"
                                    className="thm-btn comment-one__reply"
                                  >
                                    Reply
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <form action="#" className="reply-form">
                          <div className="ko">
                            <div className="col-lg-6">
                              <input
                                type="text"
                                placeholder="Your name"
                                className="reply-form__field"
                              />
                            </div>

                            <div className="col-lg-12">
                              <textarea
                                placeholder="Write message"
                                className="reply-form__field"
                              ></textarea>
                              <button
                                className="reply-form__btn thm-btn"
                                type="submit"
                              >
                                Submit Comment
                              </button>
                            </div>
                          </div>
                        </form>
                      </>
                    )}
                    <br />

                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-details__price">
                <p className="course-details__price-text">Course price </p>
                <p className="course-details__price-amount">29.9DT</p>
                <a
                  href="/Checkout"
                  className="thm-btn course-details__price-btn"
                >
                  Buy This Course
                </a>
              </div>

              <div className="course-details__meta">
                <a href="#none" className="course-details__meta-link">
                  <span className="course-details__meta-icon">
                    <i className="far fa-clock"></i>
                  </span>
                  Durations: <span>10 hours</span>
                </a>
                <a href="#none" className="course-details__meta-link">
                  <span className="course-details__meta-icon">
                    <i className="far fa-folder-open"></i>
                  </span>
                  Lectures: <span>6</span>
                </a>

                <a href="#none" className="course-details__meta-link">
                  <span className="course-details__meta-icon">
                    <i className="fas fa-play"></i>
                  </span>
                  Video: <span>8 hours</span>
                </a>

                <a href="#none" className="course-details__meta-link">
                  <span className="course-details__meta-icon">
                    <i className="far fa-bell"></i>
                  </span>
                  Language: <span>Tunisian </span>
                </a>
              </div>
              <div className="course-details__list">
                <h2 className="course-details__list-title">New Courses</h2>
                <div className="course-details__list-item">
                  <div className="course-details__list-img">
                    <img src="/images/dancing.jpg" alt="" />
                  </div>
                  <div className="course-details__list-content">
                    <a className="course-details__list-author" href="#none">
                      by <span>Ahmed Belaid</span>
                    </a>
                    <h3>
                      <a href="#none">Marketing strategies</a>
                    </h3>
                    <div className="course-details__list-stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
                <div className="course-details__list-item">
                  <div className="course-details__list-img">
                    <img src="/images/dancing.jpg" alt="" />
                  </div>
                  <div className="course-details__list-content">
                    <a className="course-details__list-author" href="#none">
                      by <span>AHmed Belaid</span>
                    </a>
                    <h3>
                      <a href="/CourseDetails">Marketing strategies</a>
                    </h3>
                    <div className="course-details__list-stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
                <div className="course-details__list-item">
                  <div className="course-details__list-img">
                    <img src="/images/dancing.jpg" alt="" />
                  </div>
                  <div className="course-details__list-content">
                    <a className="course-details__list-author" href="#none">
                      by <span>Ahmed Belaid</span>
                    </a>
                    <h3>
                      <a href="/CourseDetails">Marketing strategies</a>
                    </h3>
                    <div className="course-details__list-stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetails;
