
const NFTModel = require("../models/nft.js") 
// import fs from "fs"
const fs = require('fs');
const {join} = require("path");

// import pinataSDK from "@pinata/sdk"
const pinataSDK = require("@pinata/sdk")


// console.log("pinata variable :" , pinata)


class NFTController {
    // Create Document
    static createNFT = async (req, res) => {
    try {
        console.log("req : ", req)
        // console.log("req.body : ", req.body)
        const name = req.body.name_for_nft ;
        const price = req.body.price;
        const pinata = await pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_KEY);
        console.log(name)
        const readableStreamForFile = fs.createReadStream("./images/" + req.pinataImageFileName);
        const imageAddress = join(process.cwd(), "images",req.pinataImageFileName)
        console.log("imageAddress : ", imageAddress);
        
        var ipfsHash = await pinata.pinFileToIPFS(readableStreamForFile)
        console.log("ipfsHash : ", ipfsHash.IpfsHash)
        
        const doc = new NFTModel({
          name: name,
          price : price,
          imageHash : ipfsHash.IpfsHash
        })
        // Saving Document
        const result = await doc.save()
        console.log(result)
        return res.status(200).json({ hash : ipfsHash })
        
      } catch (error) {
        console.log(error)
      }
    }
  
    // Retrieve All Document
    static getAllNFT = async (req, res) =>{
      try {
        const result = await NFTModel.find()
        // console.log(result)
        return res.status(200).json({ data : result })
             
      } catch (error) {
        console.log(error)
      }
      
    }
  
    // Show Edit Form with Data
    static editDoc = async (req, res) =>{
      // console.log(req.params.id)
      try {
        const result = await NFTModel.findById(req.params.id)
        // console.log(result)
        res.render("edit", {data:result})
      } catch (error) {
        console.log(error)
      }
      
    }
  
    // Update Document
    static updateDocById = async (req, res) =>{
      // console.log(req.params.id)
      // console.log(req.body)
      try {
        const result = await NFTModel.findByIdAndUpdate(req.params.id, req.body)
        // console.log(result)
      } catch (error) {
        console.log(error)
      }
      res.redirect("/student")
    }
  
    // Delete Document
    static deleteDocById = async (req, res) =>{
      // console.log(req.params.id)
      try {
        const result = await NFTModel.findByIdAndDelete(req.params.id)
        res.redirect("/student")
      } catch (error) {
        console.log(error)
      }  
    }
  }
  
 module.exports = NFTController