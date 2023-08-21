const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const mongoose = require("mongoose");
var connectionUrl = "mongodb://0.0.0.0:27017/transactionlogin";
app.use(bodyParser.json("application/json"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/userRoutes"));; //routes from router


mongoose
  .connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(3001, () => {
      console.log("Example app listening on port 3000!");
    })
  )