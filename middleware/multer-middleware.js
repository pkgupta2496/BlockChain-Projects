// import multer from "multer"
const multer = require("multer")


const storage = multer.diskStorage({
    destination:  function (req, file, cb) {
        console.log("hi")
        cb(null, 'images')
    },
    filename:  (req , file, cb) => {
        // console.log("file1:", file.originalname)
        req.pinataImageFileName = file.originalname;
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });

module.exports = upload
