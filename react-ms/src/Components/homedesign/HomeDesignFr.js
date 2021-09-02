import React from "react";
import "../App.css";
import { Button } from "../Button/Button";
import "./HomeDesign.css";

function HomeDesign() {
  return (
    <>
      <div className="home-container" id="home">
        <h1> Accédez à d'énormes ressources éducatives. </h1>
        <p> Partout, à chaque fois!</p>
        <div className="hero-btns">
          <Button
            className="btns"
            to={"/Pricing"}
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Avoir accès{" "}
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            to={"/Courses"}
          >
            Parcourir les cours
          </Button>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default HomeDesign;
