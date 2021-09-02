import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "../Components/Account/Dashboard.css";
import PageHeader from "../Components/PageHeader";
import Footer from "./Footer";

function Dashboard() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="lkol">
      <PageHeader title="Courses you own " style={{}} />

      <div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousa"
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/cooking.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Cooking</h3>
              <a href="/CourseDetails" className="course-one__link">
                See Preview
              </a>{" "}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/chess.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Chess</h3>
              <a href="/CourseDetails" className="course-one__link">
                See Preview
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/dancing.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Dancing</h3>
              <a href="/CourseDetails" className="course-one__link">
                See Preview
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
