import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import TeachersDetails from "./pages/TeacherDetails";
import Pricing from "./pages/Pricing";
import CourseDetails from "./pages/CourseDetails";
import A from "./pages/A";
import Bk from "./pages/Bk";

import CourseOverview from "./pages/CourseOverview";
import { AnimatePresence } from "framer-motion";
import Panel from "./pages/Panel";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import VideoPlayer from "./pages/VideoPlayer";
import ScrollToTop from "./Components/ScrollToTop";
import Teacher from "./pages/Teacher";
import Firebase from "./Firebase";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import Mk from "./Components/classesdetails/Mk";
import Skate from "./Components/classesdetails/Skate";
import Write from "./Components/classesdetails/Write";

import ProtectedRoute from "./Components/ProtectedRoute";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route path="/SignIn" exact component={SignIn} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/Teacher" exact component={Teacher} />
            <Route path="/Courses" exact component={Courses} />
            <Route path="/AboutUs" exact component={AboutUs} />
            <Route path="/Pricing" exact component={Pricing} />
            <ProtectedRoute
              path="/TeacherDetails"
              exact
              component={TeachersDetails}
            />
            <Route path="/ForgetPassword" exact component={ForgetPassword} />
            <ProtectedRoute path="/Mk" exact component={Mk} />
            <ProtectedRoute path="/Skate" exact component={Skate} />
            <ProtectedRoute path="/Write" exact component={Write} />
            <ProtectedRoute path="/A" exact component={A} />
            <ProtectedRoute path="/Bk" exact component={Bk} />

            <ProtectedRoute
              path="/CourseDetails"
              exact
              component={CourseDetails}
            />
            <ProtectedRoute
              path="/CourseOverview"
              exact
              component={CourseOverview}
            />
            <ProtectedRoute path="/Panel" exact component={Panel} />
            <ProtectedRoute path="/Checkout" exact component={Checkout} />
            <ProtectedRoute path="/Dashboard" exact component={Dashboard} />
            <ProtectedRoute path="/VideoPlayer" exact component={VideoPlayer} />
            <ProtectedRoute path="/Profile" exact component={Profile} />
            <ProtectedRoute path="/Payment" exact component={Payment} />

            <Route path="/" component={Home} />
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
