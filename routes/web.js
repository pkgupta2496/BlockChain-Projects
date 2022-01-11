const express = require("express")
// import express from "express";

const router = express.Router();

const upload = require("../middleware/multer-middleware")




// import NFTController from "../controllers/NFTController.js";
const NFTController = require("../controllers/NFTController.js")

router.get('/', NFTController.getAllNFT)
router.post('/', upload.single('myImage') , NFTController.createNFT)
router.get('/edit/:id', NFTController.editDoc)
router.post('/update/:id', NFTController.updateDocById)
router.post('/delete/:id', NFTController.deleteDocById)

module.exports = router;
