const { firebase } = require("../util/needFirebase");

exports.addUser = (req, res) => {
  const newUser = {
    userId: "",
    nom: req.body.nom,
    prenom: req.body.prenom,
    cin: req.body.cin,
    bio: req.body.bio,
    password: req.body.password,
    dateNaissance: req.body.dateNaissance,
    telephone: req.body.telephone,
    email: req.body.email,
    role: req.body.role,
    createdAt: new Date().toISOString(),
  };

  firebase
    .firestore()
    .collection("user")
    .add(newUser)
    .then((doc) => {
      newUser.userId = doc.id;
      firebase
        .firestore()
        .doc(`user/${newUser.userId}`)
        .update(newUser)
        .then(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password);
        });

      return res.status(200).json({ general: newUser.userId });
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
    });
};

exports.getAllUser = (req, res) => {
  firebase
    .firestore()
    .collection("user")
    .get()
    .then((data) => {
      let eData = [];
      data.forEach((doc) => {
        eData.push(doc.data());
      });
      return res.json(eData);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.getUser = (req, res) => {
  firebase
    .firestore()
    .doc(`/user/${req.params.userId}`)
    .get()
    .then((doc) => {
      return res.json(doc.data());
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.deleteUser = (req, res) => {
  const document = firebase.firestore().doc(`/user/${req.params.userId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "User not found" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "User deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.updateUser = (req, res) => {
  firebase
    .firestore()
    .doc(`/user/${req.params.userId}`)
    .update(req.body)
    .then(() => {
      return res.json({ message: "user updated successful" });
    })
    .catch((err) => {
      return res.status(500).json({ error: err.code });
    });
};
