const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
            cb(null, 'public/img/users')
    },
    
    filename:  (req, file, cb) => {
            let newFileName = 'user-' + Date.now() + path.extname(file.originalname) ;
            cb(null, newFileName);
    }  
})    


const upload = multer({ storage: storage})

module.exports = upload;