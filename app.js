// import express from "express"
const express = require('express');
// import connectDB from "./db/connectdb.js"
const connectDB = require("./db/connectdb.js");
// import pinataSDK from "@pinata/sdk"
const pinataSDK = require('@pinata/sdk');

// import {join} from "path"
const web = require("./routes/web");
// import web from "./routes/web.js";
const {join} = require("path");
// import dotenv from "dotenv"
    // require("dotenv").config()


const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

const app = express();
require("dotenv").config();


app.use(express.urlencoded({extended : false}));
app.use(express.json());
// app.use(express.static(join( __dirname + '/seeds')))

app.use('/',express.static(join(process.cwd(), "seeds")))
app.use("/student", web);

app.set("view engine", "ejs");


// const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_KEY);
// console.log("pinata variable :" , pinata)

// var storage = multer.diskStorage({
//     destination:  function (req, file, cb) {
//         console.log("hi")
//         cb(null, 'images')
//     },
//     filename:  (req , file, cb) => {
//         // console.log("file1:", file.originalname)
//         req.pinataImageFileName = file.originalname;
//         cb(null, file.originalname);
//     }
// })

// var upload = multer({ storage: storage });

// app.post("/uploadImage", upload.single('myImage') , async (req,res, next) =>{
//    try{ 
//          console.log("req.pinataImageFileName :" , req.pinataImageFileName)
//          const res_path = join(process.cwd(), "images",req.pinataImageFileName)
//           console.log("res_path : ", res_path);  
//          const readableStreamForFile = fs.createReadStream("./images/" + req.pinataImageFileName);
//          var ipfsHash = await pinata.pinFileToIPFS(readableStreamForFile)
//          console.log("Hash :", ipfsHash);
//          return res.status(200).json({ hash : ipfsHash })
//      }
//      catch(error){
//          console.log(error);
//      }
// });
 
app.listen(port, () => {
    console.log('Spinning on PORT => 3000');
});