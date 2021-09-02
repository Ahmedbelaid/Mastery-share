import React from "react";
import Footer from "./Footer";
import "../Components/payment/Pricing.css";
import Grid2 from "../Components/homedesign/Grid2";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import PageHeader from "../Components/PageHeader";

const Pricing = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <PageHeader title="Plans " style={{}} />

      <section className="pricing-one pricing-page ">
        <div className="container">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Choose the plan that’s right for you
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="pricing-one__single">
                <div className="pricing-one__inner">
                  <h2 className="pricing-one__price">29.9DT </h2>
                  <p className="pricing-one__name">One Class</p>
                  <ul className="pricing-one__list list-unstyled">
                    <li>Video quality : Good</li>
                    <li>Resolution : 720p</li>
                    <li>24h Support</li>
                  </ul>
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Choose Plan
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-one__single">
                <div className="pricing-one__inner">
                  <h2 className="pricing-one__price">120DT </h2>
                  <p className="pricing-one__name">Yearly Subscripton</p>
                  <ul className="pricing-one__list list-unstyled">
                    <li>Access To All Courses</li>
                    <li>Video quality : Best</li>
                    <li>Resolution : 4K</li>
                    <li>24h Support</li>
                    <li>Live Courses</li>
                    <li>Q and A With Instructors</li>
                  </ul>
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Choose Plan
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pricing-one__single">
                <div className="pricing-one__inner">
                  <h2 className="pricing-one__price">59.9DT </h2>
                  <p className="pricing-one__name">Monthly Subscripton</p>
                  <ul className="pricing-one__list list-unstyled">
                    <li>Access To All Courses</li>
                    <li>Video quality : Better</li>
                    <li>Resolution : 1080p</li>
                    <li>24h Support</li>
                    <li>Live Courses</li>
                  </ul>
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Choose Plan
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"You must login first?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Please Login or Sign in first
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Ok
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Grid2 />
      <Footer />
    </>
  );
};

export default Pricing;
