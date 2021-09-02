import React from "react";
import PageHeader from "../Components/PageHeader";
import "../Components/Account/Profile.css";
import Footer from "../pages/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  return (
    <>
      <div>
        <PageHeader title="Profile" style={{}} />

        <div className="breadcrumb-area pt-35 pb-35 bg-gray-3"></div>
        <div className="checkout">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-9">
                <div className="checkout-wrapper">
                  <div id="faq" className="panel-group">
                    <div className="panel panel-default single-my-account">
                      <div className="panel-heading my-account-title">
                        <h3 className="panel-title">
                          <span>1 .</span>{" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#my-account-1"
                          >
                            Edit your account information{" "}
                          </a>
                        </h3>
                      </div>
                      <div
                        id="my-account-1"
                        className="panel-collapse collapse show"
                      >
                        <div className="panel-body">
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Account Information</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info  ">
                                  <label>First Name</label>
                                  <input type="text" placeholder="Ahmed" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Last Name</label>
                                  <input type="text" placeholder="Belaid" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info  ">
                                  <label>Email Adress </label>
                                  <input
                                    type="Email"
                                    placeholder="Ahmedbelaid@gmail.com"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Telephone</label>
                                  <input type="text" />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Save</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default single-my-account">
                      <div className="panel-heading my-account-title">
                        <h3 className="panel-title">
                          <span>2 .</span>{" "}
                          <a
                            data-toggle="collapse"
                            data-parent="#faq"
                            href="#my-account-2"
                          >
                            Change your password{" "}
                          </a>
                        </h3>
                      </div>
                      <div
                        id="my-account-2"
                        className="panel-collapse show collapse"
                      >
                        <div className="panel-body">
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Change Password</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info  ">
                                  <label>Password</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info  ">
                                  <label>Confirm it</label>
                                  <input type="password" />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-back">
                                <a href="#">
                                  <i className="fa fa-arrow-up"></i> back
                                </a>
                              </div>
                              <div className="billing-btn">
                                <button type="submit">Save</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
