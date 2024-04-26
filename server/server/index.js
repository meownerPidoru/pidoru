require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router/index");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const baseURL = process.env.LOCAL_CLIENT_URL;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.use(
  cors({
    credentials: true,
    origin: baseURL,
  })
);
const options = {
  dbName: "VideoKat",
};

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, options);
    app.listen(PORT, () => console.log(`Server started on PORT ${5000}`));
    mongoose.connection.on("error", (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
