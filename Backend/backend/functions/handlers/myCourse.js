const { firebase } = require("../util/needFirebase");

exports.addrealation = (req, res) => {
  const newRelation = {
    relationId: "",
    teacherId: req.body.teacherId,
    clientId: req.body.clientId,
    createdAt: new Date().toISOString(),
  };

  firebase
    .firestore()
    .collection("myCourse")
    .add(newRelation)
    .then((doc) => {
      newRelation.relationId = doc.id;
      firebase
        .firestore()
        .doc(`myCourse/${newRelation.relationId}`)
        .update(newRelation);

      return res.status(200).json({ general: newRelation.relationId });
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
    });
};

exports.getAllRelation = (req, res) => {
  firebase
    .firestore()
    .collection("myCourse")
    .get()
    .then((data) => {
      let eData = [];
      data.forEach((doc) => {
        if (doc.data().targetId == req.params.clientId) eData.push(doc.data());
      });
      return res.json(eData);
    })
    .catch((err) => {
      console.error(err);
    });
};
