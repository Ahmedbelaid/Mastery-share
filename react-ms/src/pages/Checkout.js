import React from "react";
import "../Components/payment/Checkout.css";
import PageHeader from "../Components/PageHeader";
import Footer from "./Footer";

function Account() {
  return (
    <>
      <PageHeader title="Panel" style={{}} />

      <div class="cart-main-area">
        <div class="container">
          <h3 class="cart-page-title">Your cart items</h3>
          <div className="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
              <form action="#">
                <div class="table-content table-responsive cart-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Until Price</th>
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="product-thumbnail">
                          <a href="#">
                            <img
                              src="images/MK2.jpg"
                              className="product"
                              alt=""
                            />
                          </a>
                        </td>
                        <td class="product-name">
                          <a href="#">Self development </a>
                        </td>
                        <td class="product-price-cart">
                          <span class="amount">29.9DT</span>
                        </td>

                        <td class="product-remove">
                          <a href="#">
                            <i class="fa fa-pencil"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="cart-shiping-update-wrapper">
                      <div class="cart-shiping-update">
                        <a href="#">Continue Shopping</a>
                      </div>
                      <div class="cart-clear">
                        <a href="/Payment">Checkout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="discount-code-wrapper">
                    <div class="title-wrap">
                      <h4 class="cart-bottom-title section-bg-gray">
                        Use Coupon Code
                      </h4>
                    </div>
                    <div class="discount-code">
                      <p className="gris">
                        Enter your coupon code if you have one.
                      </p>
                      <form>
                        <input type="text" required="" name="name" />
                        <button class="cart-btn-2" type="submit">
                          Apply Coupon
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-lg-44">
                  <div class="grand-totall">
                    <div class="title-wrap">
                      <h4 class="cart-bottom-title section-bg-gary-cart">
                        Cart Total
                      </h4>
                    </div>
                    <h5>
                      Total products
                      <br></br> <span>29.9DT</span>
                    </h5>
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

export default Account;
