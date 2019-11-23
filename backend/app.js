const  express =  require('express');
const  mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const user = require("../backend/schema/user");


const app = express();

mongoose.connect(
  "mongodb+srv://Suyash:thakur1999@cluster0-efyz1.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");


  next();
});

app.put("/user", (req, res, next) => {
  const user = new User({
    
      name: req.body.name,
      amount : req.body.amount,
      hospitalName: req.body.hospitalName,
      hospitalAddress: req.body.hospitalAddress,
      contact: req.body.contact,
  });
  console.log(user);
  user.save().then(result => {
    res.status(201).json({
      message: "user created"
    })
  })
 });


module.exports = app;
