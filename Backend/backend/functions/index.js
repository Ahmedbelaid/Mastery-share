const app = require("express")();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { signup, login } = require("./handlers/users");
const {
  addUser,
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
} = require("./handlers/user");
const {
  addCourse,
  getAllCourse,
  updateCourse,
  getCourse,
  deleteCourse,
  getAllCourseById,
} = require("./handlers/course");
const { addrealation, getAllRelation } = require("./handlers/myCourse");

/*


NodeJs/ExpresJs  
Database : firebase 




methods : 
-get : takhedh mel base de donnees  , Body {}
-post : edakhel fel base de donnees ,Body {DATA}
-patch : t7eb tbadel 7aja fel base de donnees ,Body {DATA}
-Delete : t7eb tafsakh 7aja fel base donnees   ,Body{}

*/

/*

Status code :
200 .... 2.. == > tet3ada, 
400 .. 4.. ==> fama ghalta fel server
500 ... 5.. ===> Backend Code

*/

/*
Real time database  : NoSql  {firebase , Mongo} ,
database : Sql {phpMyAdmin , easyPhp ,PostgreSql}



Sql ==> Table ,
NoSql ==> Collection 


ExampleId === primery Key ,


*/
//----> request   (get" local..:8087/user") [Json]
//<--- response

//MiddelWare

//Server --Middelware-- Database

//[Machine ]   --Server-express-->   && -&&------->      [Firebase]
//<-Server-Express--         <--------

//  firebase Middelware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//Signup & Signin

app.post("/signup", signup);
app.post("/login", login);

/********* Utilisateur *******/
app.post("/addUser", addUser);
app.get("/user", getAllUser);
app.patch("/user/:userId", updateUser);
app.get("/user/:userId", getUser);
app.delete("/user/:userId", deleteUser);

//********* Course *******/

app.post("/addCourse", addCourse);
app.get("/course", getAllCourse);
app.get("/courseTeacher/:teacherId", getAllCourseById);
app.patch("/course/:courseId", updateCourse);
app.get("/course/:courseId", getCourse);
app.delete("/course/:courseId", deleteCourse);

/****************** My Course *******/

app.post("/addMycourse", addrealation);
app.get("/myCourse/:courseId", getAllRelation);

/*
*
*
*
server
*
*
*
*/
var port = 8087; //Beb default : 8080
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
