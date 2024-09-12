require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/userRoute.js");

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(URL);

app.listen(PORT, () => {
  console.log("Server is Running....");
});

app.use("/users", userRoute);
