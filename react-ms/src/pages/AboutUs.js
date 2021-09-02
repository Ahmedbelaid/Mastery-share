import React from "react";
import AboutUs1 from "../Components/AboutUs/AboutUs1";
import { motion } from "framer-motion";
import PageHeader from "../Components/PageHeader";

function AboutUs() {
  return (
    <>
      <PageHeader title="Panel" style={{}} />

      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <AboutUs1 />
      </motion.div>
    </>
  );
}

export default AboutUs;
