import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Components/teachers/Teacher.css";
import { motion } from "framer-motion";
import { Button } from "../Components/Button/Button";
import PageHeader from "../Components/PageHeader";
import db from "../Firebase";
import axios from "axios";

const Teachers = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:8087/user", { params: { role: 2 } })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
    }, 0);
  }, []);

  return (
    <>
      <PageHeader title="Teachers" style={{}} />
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <>
          <section className="team-one team-page" id="teacher">
            <div className="container container-bottom">
              <div className="block-title text-center">
                <h2 className="block-title__title">Meet our best teachers</h2>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  <div className="team-one__single">
                    <div className="team-one__image">
                      <img src="/images/MK2.jpg" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h2 className="team-one__name">
                        <Link to={"/TeacherDetails"}>Mohamed Kamoun</Link>
                      </h2>
                      <p className="team-one__designation">Coach</p>
                      <p className="team-one__text">Self development</p>
                    </div>
                    <div className="team-one__social">
                      <a
                        href="https://twitter.com/ahmedbelaid3"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/Ahmedbelaid6/ "
                        target="_blank"
                      >
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      <a
                        href="https://www.pinterest.cl/ahmedbelaidsc/"
                        target="_blank"
                      >
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/ahmedbelaid2/?hl=fr  "
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  <div className="team-one__single">
                    <div className="team-one__image">
                      <img src="/images/BK.png" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h2 className="team-one__name">
                        <Link to={"/Bk"}>Blackout Team</Link>
                      </h2>
                      <p className="team-one__designation">club</p>
                      <p className="team-one__text">Skateboarding</p>
                    </div>
                    <div className="team-one__social">
                      <a
                        href="https://twitter.com/ahmedbelaid3"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/Ahmedbelaid6/ "
                        target="_blank"
                      >
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      <a
                        href="https://www.pinterest.cl/ahmedbelaidsc/"
                        target="_blank"
                      >
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/ahmedbelaid2/?hl=fr  "
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                  <div className="team-one__single">
                    <div className="team-one__image">
                      <img src="/images/oui.jpg" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h2 className="team-one__name">
                        <Link to={"/A"}>Ahmed belaid</Link>
                      </h2>
                      <p className="team-one__designation">Writer</p>
                      <p className="team-one__text">Article writer</p>
                    </div>
                    <div className="team-one__social">
                      <a
                        href="https://twitter.com/ahmedbelaid3"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/Ahmedbelaid6/ "
                        target="_blank"
                      >
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      <a
                        href="https://www.pinterest.cl/ahmedbelaidsc/"
                        target="_blank"
                      >
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/ahmedbelaid2/?hl=fr  "
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="TB">
                <Button
                  to={"/Teacher"}
                  className="btns"
                  buttonStyle="btn--outline"
                  buttonSize="btn--large"
                >
                  See More
                </Button>
              </div>
            </div>
          </section>
        </>
      </motion.div>
    </>
  );
};

export default Teachers;
