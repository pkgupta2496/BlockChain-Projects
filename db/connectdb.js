const mongoose = require("mongoose");

// import mongoose from "mongoose"

async function connectDB(DATABASE_URL) {
  try {
    const DB_OPTIONS = {
      dbName: "NFTMarketDB",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully..");
  } catch (err) {
    console.log(err);
  }
};

module.exports =  connectDB;