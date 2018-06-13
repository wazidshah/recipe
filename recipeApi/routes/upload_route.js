const uploads = require('express').Router();

const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now()+'.jpg');
      }
  })

const upload = multer({storage:storage});


uploads.post('/upload',upload.single('image'),(req,res)=>{
    let p = req.file.path.split('\\');
    let response = `${p[1]}/${p[2]}`;
    
    res.json(response);
})

module.exports = uploads;