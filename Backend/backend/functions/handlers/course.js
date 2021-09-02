const { firebase } = require("../util/needFirebase");

exports.addCourse = (req, res) => {
  const newCourse = {
    courseId: "",
    teacherId: req.body.teacherId,
    courseTitle: req.body.courseTitle,
    courseCategory: req.body.courseCategory,
    Rating: req.body.Rating,
    NumberHourse: req.body.NumberHourse,
    NumberClasses: req.body.NumberClasses,
    Language: req.body.Language,
    Overview: req.body.Overview,
    createdAt: new Date().toISOString(),
  };

  firebase
    .firestore()
    .collection("course")
    .add(newCourse)
    .then((doc) => {
      newCourse.courseId = doc.id;
      firebase
        .firestore()
        .doc(`course/${newCourse.courseId}`)
        .update(newCourse);

      return res.status(200).json({ general: newCourse.courseId });
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
    });
};

exports.getAllCourse = (req, res) => {
  firebase
    .firestore()
    .collection("course")
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

exports.getAllCourseById = (req, res) => {
  firebase
    .firestore()
    .collection("course")
    .get()
    .then((data) => {
      let eData = [];
      data.forEach((doc) => {
        if (doc.data().teacherId == req.params.teacherId) {
          eData.push(doc.data());
        }
      });
      return res.json(eData);
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.getCourse = (req, res) => {
  firebase
    .firestore()
    .doc(`/course/${req.params.courseId}`)
    .get()
    .then((doc) => {
      return res.json(doc.data());
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.deleteCourse = (req, res) => {
  const document = firebase.firestore().doc(`/course/${req.params.courseId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Course not found" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "Course deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.updateCourse = (req, res) => {
  console.log(req.params.courseId);
  console.log(req.body);
  firebase
    .firestore()
    .doc(`/course/${req.params.courseId}`)
    .update(req.body)
    .then(() => {
      return res.json({ message: "Course updated successful" });
    })
    .catch((err) => {
      return res.status(500).json({ error: err.code });
    });
};
