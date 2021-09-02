import React from "react";
import "./Grid4.css";

const Grid4 = () => {
  return (
    <div className="no">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="icon-box-1">
            <div className="icon-container">
              <i className="fas fa-handshake" />
              <div className="icon-links">
                <h3 href="listings-grid-standard-with-sidebar.html">
                  Guaranteed content
                </h3>
              </div>
            </div>

            <h3>Guaranteed content</h3>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="icon-box-1">
            <div className="icon-container">
              <i className="fas fa-user-graduate" />
              <div className="icon-links">
                <h3 href="listings-grid-standard-with-sidebar.html">
                  Expert Teachers{" "}
                </h3>
              </div>
            </div>

            <h3> Expert Teachers </h3>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="icon-box-1">
            <div className="icon-container">
              <i className="fas fa-tasks" />
              <div className="icon-links">
                <h3 href="listings-grid-standard-with-sidebar.html">
                  Top catergories
                </h3>
              </div>
            </div>

            <h3>Top catergories </h3>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="icon-box-1">
            <div className="icon-container">
              <i className="fas fa-tachometer-alt" />
              <div className="icon-links">
                <h3 href="listings-grid-standard-with-sidebar.html">
                  Fast and simple
                </h3>
              </div>
            </div>

            <h3> Fast and simple</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid4;
