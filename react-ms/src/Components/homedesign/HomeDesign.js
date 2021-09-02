import React from "react";
// import ".../App.css";
import { Button } from "../Button/Button";
import "./HomeDesign.css";

function HomeDesign() {
  return (
    <>
      <div className="home-container" id="home">
        <h1> Get Access to A Huge Educational Resources. </h1>
        <p> Everywhere, Everytime!</p>
        <div className="hero-btns">
          <Button
            className="btns"
            to={"/Pricing"}
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Get Access{" "}
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            to={"/Courses"}
          >
            Browse Courses
          </Button>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default HomeDesign;
