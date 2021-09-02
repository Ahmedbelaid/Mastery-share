import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import "../Components/Account/SignUp.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../Firebase";
import PageHeader from "../Components/PageHeader";
import Footer from "./Footer";
import axios from "axios";
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

export default function SignUp() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let user = {
    userName: "",
    email: "",
    password: "",
  };
  let errors = [];
  let userColRef = firebase.database().ref("users");

  const [userState, setuserState] = useState(user);
  const [errorState, seterrorState] = useState(errors);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInput = (event) => {
    let target = event.target;
    setuserState((currentState) => {
      let currentuser = { ...currentState };
      currentuser[target.name] = target.value;
      return currentuser;
    });
  };

  const checkForm = () => {
    if (isFormEmpty()) {
      seterrorState((error) => error.concat({ message: "missing field" }));
      return false;
    } else if (!checkPassword()) {
      seterrorState((error) => error.concat({ message: "password not valid" }));
      return false;
    }
    return true;
  };

  const isFormEmpty = () => {
    return (
      !userState.userName.length ||
      !userState.email.length ||
      !userState.password.length
    );
  };

  const checkPassword = () => {
    if (userState.password.length < 6) {
      seterrorState((error) =>
        error.concat({ message: "Password should be more than six letters" })
      );
      return false;
    }
    return true;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    seterrorState(() => []);
    setIsSuccess(false);
    if (checkForm()) {
      setIsLoading(true);
      console.log(userState.userName);

      axios
        .post("http://localhost:8087/addUser ", {
          nom: "",
          prenom: userState.userName,
          cin: "",
          bio: "",
          password: userState.password,
          dateNaissance: "",
          telephone: "",
          email: userState.email,
          role: "",
        })

        .then((res) => {
          window.location = "/";
          user.sendEmailVerification();
        });
    }
  };
  const formaterrors = () => {
    return errorState.map((error, index) => <p key={index}>{error.message}</p>);
  };

  const updateUser = (createdUser) => {
    if (createdUser) {
      setIsLoading(true);
      createdUser.user
        .updateProfile({
          displayName: userState.userName,
        })
        .then(() => {
          setIsLoading(false);
          saveUserDb(createdUser);
        })
        .catch((serverError) => {
          setIsLoading(false);
          seterrorState((error) => error.concat(serverError));
        });
    }
  };

  const saveUserDb = (createdUser) => {
    setIsLoading(true);
    userColRef
      .child(createdUser.user.uid)
      .set({
        displayName: createdUser.user.displayName,
        photoURL: createdUser.user.photoURL,
      })
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((serverError) => {
        setIsLoading(false);
        seterrorState((error) => error.concat(serverError));
      });
  };

  return (
    <>
      {" "}
      <PageHeader title="Sign Up" style={{}} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <img className="test1" src="/images/auth1.svg"></img>{" "}
          <form
            className={classes.form}
            onSubmit={onSubmit}
            noValidate
            id="signup-form"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="userName"
                  value={userState.userName}
                  icon="user"
                  iconPosition="left"
                  onChange={handleInput}
                  type="text"
                  fullWidth
                  placeholder="Name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="email"
                  value={userState.email}
                  icon="mail"
                  iconPosition="left"
                  onChange={handleInput}
                  type="email"
                  fullWidth
                  placeholder="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  value={userState.password}
                  icon="lock"
                  iconPosition="left"
                  onChange={handleInput}
                  type="password"
                  fullWidth
                  placeholder="Password"
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="signupbutton"
            >
              Sign Up
            </Button>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
      <Footer />
    </>
  );
}
