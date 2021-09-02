import React from "react";
import "../App.css";
import HomeDesignFr from "./HomeDesignFr";

import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <HomeDesignFr />
    </motion.div>
  );
}

export default Home;
