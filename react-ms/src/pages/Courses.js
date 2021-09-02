import React from "react";
import "../Components/courses/Courses.css";
import { motion } from "framer-motion";
import Chips from "../Components/courses/Chips";
import PageHeader from "../Components/PageHeader";
import Classes from "../Components/courses/Classes";
import Footer from "./Footer";
function Cards() {
  return (
    <>
      <PageHeader title="Courses " style={{}} />

      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <div className="cards" id="courses">
          <p className="Tit">Browse Our Popular Courses</p>
          <Chips />
          <Classes />
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Cards;
