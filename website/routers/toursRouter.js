const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')

const toursController = require('../controllers/toursController')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
            cb(null, 'public/img/products')
    },
    
    filename:  (req, file, cb) => {
            let newFileName = 'tour' + file.originalname;
            cb(null, newFileName);
    }  
})



const upload = multer({ storage: storage}   )


router.get('/detail/:id/', toursController.detail);

//creacion del producto
router.get('/create', toursController.create);
router.post('/create', upload.any(), toursController.save)

router.get('/edit/:id', toursController.edit);
//router.put('/edit/:id', toursController.update)

router.get('/list', toursController.tours);



module.exports = router;