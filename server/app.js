const express = require("express");
const sequelize = require("sequelize");
const bodyParser = require("body-parser");
const db = require("./db/models");
const morgan = require("morgan");

db.sequelize.sync();

const app = express();

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

 
app.get("/", (req,res) => {
  res.status(200).send("use api/authors or api/blogs");
});

app.use("/api/authors", require("./db/routes/authors"));
app.use("/api/blogs", require("./db/routes/blogs"));

module.exports = app;