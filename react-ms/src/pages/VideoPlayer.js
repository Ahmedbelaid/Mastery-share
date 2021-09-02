import React from "react";
import "../Components/courses/CourseOverview.css";
import PageHeader from "../Components/PageHeader";
import Footer from "./Footer";
import Player from "./Player";

const CourseOverview = () => {
  return (
    <>
      <PageHeader title="Videos" style={{}} />

      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-one__single">
                <div className="blog-one__image">
                  <Player />{" "}
                </div>
                <div className="blog-one__content text-center">
                  <div className="blog-one__meta">
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      href="#none"
                      data-original-title="No Comments"
                    >
                      <i className="fa fa-comments"></i>
                    </a>
                    <a
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      href="#none"
                      data-original-title="Posted By Admin"
                    >
                      <i className="fa fa-user"></i>
                    </a>
                  </div>
                  <h2 className="blog-one__title">
                    How to build muscles at home{" "}
                  </h2>
                  <p className="blog-one__text">
                    In this course you'll Create games with Python, like Tic Tac
                    Toe and Blackjack! Learn advanced Python features, like the
                    collections module and how to work with timestamps! Learn to
                    use Object Oriented Programming with classes! Understand
                    complex topics, like decorators. Understand how to use both
                    the Jupyter Notebook and create .py files Get an
                    understanding of how to create GUIs in the Jupyter Notebook
                    system! Build a complete understanding of Python from the
                    ground up!
                  </p>

                  <p className="blog-one__text">
                    Create games with Python, like Tic Tac Toe and Blackjack!
                    Learn advanced Python features, like the collections module
                    and how to work with timestamps! Learn to use Object
                    Oriented Programming with classes! Understand complex
                    topics, like decorators. Understand how to use both the
                    Jupyter Notebook and create .py files Get an understanding
                    of how to create GUIs in the Jupyter Notebook system! Build
                    a complete understanding of Python from the ground up!
                  </p>
                </div>
              </div>
              <div className="share-block">
                <div className="left-block">
                  <p>
                    Tags: <a href="#none">Sports,</a>{" "}
                    <a href="#none">muscles,</a> <a href="#none">Tennis</a>
                  </p>
                </div>
                <div className="social-block">
                  <a href="#none">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#none">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>
              </div>
              <div className="blog-details__author">
                <div className="blog-details__author-image">
                  <img src="/images/law.png" alt="Awesome alter text" />
                </div>
                <div className="blog-details__author-content">
                  <h3>Ahmed Belaid</h3>
                  <p>
                    Ahmed Belaid Ahmed Belaid Ahmed BelaidAhmed Belaid Ahmed
                    Belaid Ahmed BelaidAhmed BelaidAhmed Ahmed Belaid Ahmed
                    BelaidAhmed BelaidAhmed BelaidAhmed BelaidAhmed Belaid
                  </p>
                </div>
              </div>
              <h2 className="blog-details__content-title">2 Comments</h2>
              <div className="comment-one">
                <div className="comment-one__single">
                  <div className="comment-one__image">
                    <div className="inner-block">
                      <img src="/images/law.png" alt="Awesome alter text" />
                    </div>
                  </div>
                  <div className="comment-one__content">
                    <div className="comment-one__content-top">
                      <div className="comment-one__top-left">
                        <h3 className="comment-one__author">Ahmed Belaid</h3>
                        <p className="comment-one__date">
                          20 April, 2021{" "}
                          <span className="comment-one__date-sep">-</span> 4:00
                          pm
                        </p>
                        <p className="comment-one__text">
                          Ahmed BelaidAhmed BelaidAhmed BelaidAhmed BelaidAhmed
                          BelaidAhmed BelaidAhmed BelaidAhmed BelaidAhmed
                          BelaidAhmed BelaidAhmed BelaidAhmed BelaidAhmed
                          BelaidAhmed BelaidAhmed BelaidAhmed Belaid
                        </p>
                      </div>
                      <div className="comment-one__top-right">
                        <a href="#none" className="thm-btn comment-one__reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-one__single">
                  <div className="comment-one__image">
                    <div className="inner-block">
                      <img src="/images/law.png" alt="Awesome alter text" />
                    </div>
                  </div>
                  <div className="comment-one__content">
                    <div className="comment-one__content-top">
                      <div className="comment-one__top-left">
                        <h3 className="comment-one__author">Ahmed Belaid</h3>
                        <p className="comment-one__date">
                          20 April, 2021{" "}
                          <span className="comment-one__date-sep">-</span> 4:00
                          pm
                        </p>
                        <p className="comment-one__text">
                          Ahmed BelaidAhmed BelaidAhmed BelaidAhmed BelaidAhmed
                          Belaid Ahmed BelaidAhmed BelaidAhmed BelaidAhmed
                          BelaidAhmed BelaidAhmed BelaidAhmed BelaidAhmed Belaid
                          Ahmed BelaidAhmed BelaidAhmed Belaid
                        </p>
                      </div>
                      <div className="comment-one__top-right">
                        <a href="#none" className="thm-btn comment-one__reply">
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="blog-details__content-title">Leave a Comment</h2>
              <form action="#" className="reply-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="reply-form__field"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      placeholder="Enter email"
                      className="reply-form__field"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      placeholder="Write message"
                      className="reply-form__field"
                    ></textarea>
                    <button className="reply-form__btn thm-btn" type="submit">
                      Submit Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar__single sidebar__search"></div>

                <div className="sidebar__single sidebar__category">
                  <h3 className="sidebar__title">Videos</h3>
                  <ul className="sidebar__category-list">
                    <li className="sidebar__category-list-item">
                      <a href="/VideoPlayer">Class 1</a>
                    </li>
                    <li className="sidebar__category-list-item">
                      <a href="#none">Class 2</a>
                    </li>
                    <li className="sidebar__category-list-item">
                      <a href="#none"> Class 3</a>
                    </li>
                    <li className="sidebar__category-list-item">
                      <a href="#none">Class 4</a>
                    </li>
                    <li className="sidebar__category-list-item">
                      <a href="#none">Class 5</a>
                    </li>
                    <li className="sidebar__category-list-item">
                      <a href="#none">Class 6</a>
                    </li>
                  </ul>
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

export default CourseOverview;
