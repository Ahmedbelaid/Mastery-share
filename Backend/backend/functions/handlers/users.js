const { db, admin } = require("../util/admin");
const { firebase } = require("../util/needFirebase");
const config = require("../util/config");

exports.signup = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
  };

  return firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)

    .then((data) => {
      return res.status(201).json({ message: "account created" });
    })

    .catch((err) => {
      console.error(err);

      return res
        .status(500)
        .json({ general: "Something went wrong , please try again" });
    });
};

exports.login = (req, res) => {
  let rolee;
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      console.log(data);
      return res.status(200).json({ general: data.user.uid });
    })

    .catch((err) => {
      return res
        .status(403)
        .json({ general: "Wrong credentials , please try again" });
    });
};
