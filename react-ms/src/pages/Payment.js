import React from "react";
import PageHeader from "../Components/PageHeader";
import "../Components/payment/Payment.css";
import Footer from "./Footer";

function Payment() {
  return (
    <>
      <PageHeader title="Payment" style={{}} />

      <div>
        <div class="checkout-area">
          <div class="container">
            <div class="row">
              <div class="co">
                <div class="billing-info-wrap">
                  <h3>Billing Details</h3>
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="billing-info">
                        <label>First Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="billing-info ">
                        <label>Last Name</label>
                        <input type="text" />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="billing-select mb-20">
                        <label>Country</label>
                        <select>
                          <option>Select a country</option>
                          <option>Tunisia</option>
                          <option>Algeria</option>
                          <option>Moroco</option>
                          <option>Libia</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="billing-info mb-20">
                        <label>Street Address</label>
                        <input
                          class="billing-address"
                          placeholder="street name"
                          type="text"
                        />
                        <input placeholder="Apartment" type="text" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="billing-info mb-20">
                        <label>Town / City</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="billing-info mb-20">
                        <label>State / County</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="billing-info mb-20">
                        <label>Postcode / ZIP</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="billing-info mb-20">
                        <label>Phone</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="billing-info mb-20">
                        <label>Email Address</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>

                  <div class="different-address open-toggle mt-30"></div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="your-order-area">
                  <h3>Your order</h3>
                  <div class="your-order-wrap gray-bg-4">
                    <div class="your-order-product-info">
                      <div class="your-order-top">
                        <ul>
                          <li>Product</li>
                          <li>Total</li>
                        </ul>
                      </div>
                      <div class="your-order-middle">
                        <ul>
                          <li>
                            <span class="order-middle-left">
                              Product Name X 1
                            </span>{" "}
                            <span class="order-price">$29 </span>
                          </li>
                        </ul>
                      </div>

                      <div class="your-order-total">
                        <ul>
                          <li class="order-total">Total</li>
                          <li>29.9DT</li>
                        </ul>
                      </div>
                    </div>
                    <div class="payment-method">
                      <div class="payment-accordion element-mrg">
                        <div class="panel-group" id="accordion">
                          <div class="panel payment-accordion">
                            <div class="panel-heading" id="method-one">
                              <h4 class="panel-title">
                                <a
                                  data-toggle="collapse"
                                  data-parent="#accordion"
                                  href="#method1"
                                >
                                  Direct bank transfer
                                </a>
                              </h4>
                            </div>
                            <div
                              id="method1"
                              class="panel-collapse collapse show"
                            >
                              <div class="panel-body">
                                <p>
                                  When You Click on Place Order you will be
                                  redirected directly to the payment page
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="panel payment-accordion">
                            <div id="method3" class="panel-collapse collapse">
                              <div class="panel-body">
                                <p>
                                  Please send a check to Store Name, Store
                                  Street, Store Town, Store State / County,
                                  Store Postcode.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="Place-order mt-25">
                    <a class="btn-hover" href="http://www.e-shop.poste.tn/">
                      Place Order
                    </a>
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

export default Payment;
