const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware'); 

const uploadImg = require("../config/multer").uploadImg

const path = require('path');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '../assets/images/')); 
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

router.post('/signup', uploadImg.single('imgSrc'), userController.createUser); 
router.post('/login', userController.authUser);
router.put('/update', protect, uploadImg.single('imgSrc'), userController.updateUser); 
router.post('/home', protect, userController.home);
router.get('/', protect, userController.getUser);
router.get('/images/:imageName', userController.getImage);
router.put('/logout', protect, userController.logoutUser);

module.exports = router;
