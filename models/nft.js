const mongoose = require('mongoose')

// Defining Schema
const NFTSchema = new mongoose.Schema({
  name: {type:String, trim:true},
  price : {type:Number, required:true},
  imageHash : {type:String, required:true, trim:true}
})

// Model
const NFTModel = mongoose.model("NFT", NFTSchema)

module.exports = NFTModel
