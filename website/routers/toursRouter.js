const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')

const toursController = require('../controllers/toursController')

const storage = multer.diskStorage(
    {
        destination: (req,file,cb) => {
            cb(null, 'public/img/products')
        }
    },
    {
        filename: function (req, file, cb) {
            const newFileName = 'tour-'+ Date.now() + path.extname(file.originalname);
            cb(null, newFileName);
        }
    }
)
const upload = multer({ storage: storage })


router.get('/detail/:id/', toursController.detail);

//creacion del producto
router.get('/create', toursController.create);
router.post('/create', upload.any(), toursController.save)

router.get('/edit', toursController.edit);

router.get('/list', toursController.tours);



module.exports = router;