const multer = require("multer");
const path = require("path");


// var storage = multer.diskStorage({
//    destination: function(res, file, cb) {
//     cb(null, 'frontend/public/images/')
//    },
//    filename: function(req, file, cb) {
//     let ext = path.extname(file.originalname)
//     cb(null, Date.now() + ext)
//    }
// });

// const upload = multer({
//     dest:'images',
//     filename: function (req, file, cb) { 
//       cb(null, file.originalname) 
//     },
//     limits: {
//         fileSize: 10000000,
//     },
//     fileFilter(req, file, cb) {
//        if(!file.originalname.match(/\.(jpg|jpeg|png|JPG|HEIC)$/)) {
//            return cb(new Error('Please attach an image'))
//        }
//        cb(undefined, true);
//     }
// })

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, "frontend/public/images/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: fileStorageEngine});


module.exports = upload