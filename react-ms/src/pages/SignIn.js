import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import "../Components/Account/SignIn.css";
import SignUp from "./SignUp";
import firebase from "../Firebase";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let user = {
    email: "",
    password: "",
  };
  let errors = [];

  const [userState, setuserState] = useState(user);
  const [errorState, seterrorState] = useState(errors);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (event) => {
    let target = event.target;
    setuserState((currentState) => {
      let currentuser = { ...currentState };
      currentuser[target.name] = target.value;
      return currentuser;
    });
  };

  const isFormEmpty = () => {
    return !userState.email.length || !userState.password.length;
  };
  const checkForm = () => {
    if (isFormEmpty()) {
      seterrorState((error) => error.concat({ message: "missing field" }));
      return false;
    }
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    seterrorState(() => []);

    if (checkForm()) {
      setIsLoading(true);
      axios
        .post(" http://localhost:8087/login", {
          password: userState.password,
          email: userState.email,
        })
        .then((res) => {
          localStorage.setItem("ID", res.data.general);
          localStorage.setItem("isAuthenticated", "true");
          console.log(res.data.general);
          window.location = "/";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const formaterrors = () => {
    return errorState.map((error, index) => <p key={index}>{error.message}</p>);
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Login"}</DialogTitle>
        <DialogContent>
          {" "}
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography className="signintext" component="h1" variant="h5">
                Sign in
              </Typography>
              <img className="test1" src="/images/auth.svg"></img>{" "}
              <form onSubmit={onSubmit} noValidate>
                <TextField
                  name="email"
                  value={userState.email}
                  icon="mail"
                  iconPosition="left"
                  onChange={handleInput}
                  type="email"
                  placeholder="Email"
                  fullWidth
                />

                <TextField
                  name="password"
                  value={userState.password}
                  icon="lock"
                  iconPosition="left"
                  onChange={handleInput}
                  type="password"
                  placeholder="Password"
                  fullWidth
                />
                <FormControlLabel
                  control={<Checkbox value="remember" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="button"
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/ForgetPassword" variant="body2" className="fp">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <div className="da">
                      <a href="/SignUp" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>

            <Box mt={8}></Box>
          </Container>
        </DialogContent>
      </Dialog>

      <Button onClick={handleClickOpen} className="sign-in">
        Sign In{" "}
      </Button>
    </>
  );
}
