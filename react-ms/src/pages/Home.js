import React from "react";
import "../App.css";
import HomeDesign from "../Components/homedesign/HomeDesign";
import Footer from "./Footer";
import Grid2 from "../Components/homedesign/Grid2";
import Grid3 from "../Components/homedesign/Grid3";
import Drawer from "../Components/homedesign/Drawer";
import { motion } from "framer-motion";
import Grid4 from "../Components/homedesign/Grid4";
import Courses from "./Courses";
import Teachers from "./Teacher";
import AboutUs from "./AboutUs";
import Classes from "../Components/courses/Classes";

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <HomeDesign />
      <Grid4 />
      <Grid3 />

      <Classes />

      <Teachers />
      <Grid2 />

      <Drawer />
      <AboutUs />
      <Footer />
    </motion.div>
  );
}

export default Home;
