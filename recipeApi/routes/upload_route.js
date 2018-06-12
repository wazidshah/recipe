const uploads = require('express').Router();

const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+'.jpg');
      }
  })

const upload = multer({storage:storage});


uploads.post('/upload',upload.single('image'),(req,res)=>{
    res.json(req.file.path);
})

module.exports = uploads;