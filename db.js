const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb://localhost:27017/CrudDB";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

// app.listen(8000, () => {
//   console.log("Server started on port 8000");
// });
